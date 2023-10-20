const Match = require("./Match");

test("crear un partido", ()=>{
    const Partido1 = new Match();
    expect(Partido1).toEqual({});
    expect(Partido1 instanceOf Match).toBeTrue();
});