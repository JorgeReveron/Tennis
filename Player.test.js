const Player = require("./Player");

test("crear jugador", () =>{
    const jugador1 = new Player("Pepe");
    expect(jugador1.name).toBe("Pepe");
    expect(jugador1).toEqual({ name: "Pepe"});
});

test("Crear jugador con ranking", ()=>{
    const jugador1 = new Player("Pepe", 7);
    expect(jugador1.ranking).toBe(7);
    jugador1.ranking = 9;
    expect(jugador1.ranking).toBe(9);
    expect(jugador1).toEqual({ranking: 9, name: "Pepe"});
});