let a: Promise<number>
a = new Promise((resolve, reject) => {
  resolve(2)
});


class Mypromise implements Promise<any> {
  then<TResult1 = any, TResult2 = never>(onfulfilled?: (value: any) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): Promise<TResult1 | TResult2> {
    throw new Error("Method not implemented.");
  }
  catch<TResult = never>(onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<any> {
    throw new Error("Method not implemented.");
  }
  finally(onfinally?: () => void): Promise<any> {
    throw new Error("Method not implemented.");
  }
  [Symbol.toStringTag]: string;
}


type menuTree = {

  url: string;

  text: string;

  id: number;

  children: Array<menuTree> | []

}

let menu: Array<menuTree> = [
  {
    url: '',
    text: '',
    id: 1,
    children: [
      {
        url: '',
        text: '',
        id: 1,
        children: []
      }
    ]
  }
]