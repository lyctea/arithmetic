interface Ipros {
  aProps: string;
  bProps: string;
}

interface IState {
  aState: string;
  bState: string;
}

class App extends React.PureComponent<Ipros, IState> {
  state = {
    aState: "",
    bState: ""
  };
}
