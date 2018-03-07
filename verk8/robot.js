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
            if (p.place != this.place) return p;  // Athugar hvort staðurinn sem pakkinn á að fara á sé sá sem hann er á
            return {place: destination, address: p.address};  // Skilar hvert á að fara
        }).filter(p => p.place != p.address); 
        return new VillageState(destination, parcels);  // Skilar nýju instance af VillageState þegar hann er búinn að vinna til að halda áfram
        }
    }
}

function runRobot(state, robot, memory) {  // Fall sem keyrir forritið og tekur inn random state og robot fall fyrir mismunandi robot gerðir
    for (let turn = 0;; turn++) {  // loopa fyrir hvert turn
        if (state.parcels.length == 0) {  // Athugar hvort búið er að skila öllum pökkum og ef svo er þá skrifar það hversu mörg turns það tók
        console.log(`Done in ${turn} turns`);
        break;  // Breakar úr loopuni þar sem búið er að skila öllum pökkunum
        }
        let action = robot(state, memory);  // Setur robotinn valinn fyrir þetta run í breytu til að vinna með
        state = state.move(action.direction);  // færir robotinn með move fallinu í VillageState
        memory = action.memory;  // Fær minnið sem gefið er robotnum
        console.log(`Moved to ${action.direction}`);  // Skráir í console hvert hann færði sig
    }
}

function randomPick(array) {  // Fall sem tekur inn array og skilar random element úr því
    let choice = Math.floor(Math.random() * array.length);  // Math aðferðir sem velja hvaða hlut í arraynu á að skila
    return array[choice];  // skilar hlutnum sem var valinn
}

function randomRobot(state) {  // Robot fall sem velur random stað í hvert sinn þangað til hann er búinn að skil öllum pökkum
    return {direction: randomPick(roadGraph[state.place])};  // Skilar áttinni sem randomPick gefur honum úr listanum
}

VillageState.random = function(parcelCount = 5) {  // Fall geymt í breytunni random undir VilalgeState
    let parcels = [];  // Array sem heldur utan um pakkana
    for (let i = 0; i < parcelCount; i++) {  // loopa sem loopar jafn oft og fljöldi pakka
        let address = randomPick(Object.keys(roadGraph));   // Velur random áfangastað
        let place;  // Býr til tóma breytu 'place'
        do { // Finnur nýjan stað fyrir place ef place og address eru það sama 
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});  // Bætir leiðinni sem hann þarf að fara í parcel arrayið
    }
    return new VillageState("Post Office", parcels);  // Skilar nýju VillageState
};

const mailRoute = [  // Fast array sem routeRobot notar til að vinna.
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

function routeRobot(state, memory) {  // Robot sem þarf fyrir skilgreyndar leyðir til að vinna.
    if (memory.length == 0) {  // athugar ef ekkert er í minninu og ef svo er setur hann mailRoute í minni
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};  // Skilar átt farið í og nýja memory
}

function findRoute(graph, from, to) {  // Fall sem goalOrientedRobot notar
    let work = [{at: from, route: []}];  // 
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

function goalOrientedRobot({place, parcels}, route) {  // Robot sem finnur bestu leiðina til að taka í hvert sinn
    if (route.length == 0) {  // Ef ekkert route er
        let parcel = parcels[0];  // Tekur fyrsta pakkann
        if (parcel.place != place) {  // Athugar hvort hann sé á réttum stað eða ekki
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};  // Skilar átt farið í og updated memory
}

runRobot(VillageState.random(), goalOrientedRobot, []);  // Keyrir forritið með goalOrientedRobotinum
