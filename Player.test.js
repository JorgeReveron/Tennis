const Player = require("./Player");

test("crear jugador", () =>{
    const jugador1 = new Player("Pepe");
    expect(jugador1.name).toBe("Pepe");
    expect(jugador1).toEqual({ name: "Pepe"});
});