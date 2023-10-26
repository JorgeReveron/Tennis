const Player = require("./Player");

test("crear jugador", () =>{
    const jugador1 = new Player("Pepe");
    expect(jugador1.name).toBe("Pepe");
    expect(jugador1).toEqual({ name: "Pepe",ranking: 0});
});

test("Crear jugador con ranking", ()=>{
    const jugador1 = new Player("Pepe", 7);
    expect(jugador1.ranking).toBe(7);
    jugador1.ranking = 9;
    expect(jugador1.ranking).toBe(9);
    expect(jugador1).toEqual({ranking: 9, name: "Pepe"});
});

test("crear jugador male", () =>{
    const jugador1 = new Player("Pepe",5 , "male");
    expect(jugador1.name).toBe("Pepe");
    expect(jugador1.gender).toBe("male");
});

test("crear jugador female", () =>{
    const jugador1 = new Player("Ana",3, "female");
    expect(jugador1.name).toBe("Ana");
    expect(jugador1.gender).toBe("female");
});

test("crear jugador female sin indicar genero", () =>{
    const jugador1 = new Player("Ana");
    expect(jugador1.name).toBe("Ana");
    expect(jugador1.gender).toBe("female");
});

test("crear jugador female por poner un genero extraño", () =>{
    const jugador1 = new Player("Ana",2, "kkfu");
    expect(jugador1.name).toBe("Ana");
    expect(jugador1.gender).toBe("female");
});

test("Crear jugador con fecha nacimiento valida", () =>{
    const jugador1 = new Player("Ana",2,"female","13/04/1999");
    expect(jugador1.birthday).toBe("13/04/1999");
});

test("Crear jugador con fecha nacimiento no valida", () =>{
    const jugador1 = new Player("Ana",2,"female","kkfu");
    expect(jugador1.birthday).not.toBe("kkfu");
    expect(jugador1.birthday).toBeUndefined();
    expect(jugador1.age).toBeUndefined();
});

test("Crear jugador con fecha nacimiento valida", () =>{
    const jugador1 = new Player("Ana",2,"female","28/10/2000");
    expect(jugador1.age).toBe(22);
});

test("jugador benjamin",()=>{
    const jugador = new Player("Pepe",1,"male","12/12/2016");
    expect(jugador.category).toBe("Benjamin");
});

test("jugador cadet",()=>{
    const jugador = new Player("Pepe",1,"male","1/1/2010");
    expect(jugador.category).toBe("Cadet");
});

test("jugador junior",()=>{
    const jugador = new Player("Pepe",1,"male","1/1/2004");
    expect(jugador.category).toBe("Junior");
});

test("jugador senior",()=>{
    const jugador = new Player("Pepe",1,"male","12/12/2000");
    expect(jugador.category).toBe("Senior");
});