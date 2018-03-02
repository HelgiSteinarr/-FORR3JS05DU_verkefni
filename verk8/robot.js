// Hér er föst breyta með öllum götunum í bænum og sýnir hvaða hús gatan tengir
const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];

// Gerir object sem heldur utan um hver þú getur farið frá hverjum stað
function buildGraph(edges) {
    let graph = Object.create(null); // Objectinn búinn til
    function addEdge(from, to) {  // Fall sem bætir við öllum stöðunum 1 í einu
        if (graph[from] == null) {  // Ef staðurinn er ekki í objectinu 
        graph[from] = [to];         // þá bætir það honum við
        } else {                    // Ef hann er það hinsvegar
        graph[from].push(to);       // Þá er bætt við staðinn.
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) // for loopa sem kallar á 
    {                                            // fallið fyrir ofan fyrir hvern                                                  
        addEdge(from, to);                      // veg eftir að það er búið að 
        addEdge(to, from);                     // skipta stöðunum í tvennt
    }
    return graph; // returnar objectinu þegar allt er búið.
}

// keyrir fallið sem býr til objectið og geymir það í fastri breytu
const roadGraph = buildGraph(roads);

class VillageState {  // Klasi sem geymir stöðu forritsins og hefur move() fallið sem robotinn notar
    constructor(place, parcels) {  // Smiður sem heldur bara utan um breytur
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {  // Fall sem "hreyfir" róbotinn
        if (!roadGraph[this.place].includes(destination)) {  // Athugar hvort staðurinn sem hann er á sé einn af áfangastöðunum
            return this;  // Ef þetta er ekki einn áfangastaðana þá skilar hann bara þessu instance af VillageState til að nota næst
        } else {  // Ef þetta er einn þeirra
        let parcels = this.parcels.map(p => { 
            if (p.place != this.place) return p;
            return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
        }
    }
}

let first = new VillageState(
"Post Office",
[{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
        console.log(`Done in ${turn} turns`);
        break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
            work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

runRobot(VillageState.random(), goalOrientedRobot, []);