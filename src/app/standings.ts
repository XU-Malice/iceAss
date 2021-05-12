export class Standings {
    constructor(
    public draws:number,
    public against:number,
    public played:number,
    public name:string,
    public behinds_against:number,
    public percentage: number,
    public losses: number,
    public behinds_for: number,
    public pts:number,
    public goals_against:number,
    public id:number,
    public wins:number,
    public rank:number,
    public goals_for:number
    ){}
}
