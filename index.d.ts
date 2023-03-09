interface IVector{
    components:number[];
    add(v:IVector):IVector;
    subtract(v:IVector):IVector;
    reverse():IVector;
}

interface ISerialize{
    serialize():string;
    unserialize(serialized:string):void;
}

interface IGameElement extends ISerialize{
    id:number;
    name:string;
    hp:number;
    mp:number;
    speed:number;
    power:number;
    defence:number;
    width:number;
    height:number;
    x:number;
    y:number;
    color:number[];
}

interface IGameInput extends ISerialize{
    setKey(key:string, pressed:boolean):void;
    hasKey(keys:string|string[]):boolean;
}

interface IState<TElement extends ISerialize, TInput extends ISerialize> extends ISerialize{
  element:TElement;
  input:TInput;
}

type IGameState = IState<IGameElement, IGameInput>;
