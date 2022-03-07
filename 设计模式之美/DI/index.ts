import {
  Inject,
  Injectable,
  Injector,
  rootInjector,
} from "./common-injector/index";

@Injectable()
class TestService3 {}

@Injectable()
class TestService2 {
  @Inject() public aaa: TestService3;
  public fuck: string = "fuck";
}

// const otherInjector = new Injector();
const otherInjector = rootInjector.fork();

class AA {
  public aaa: string;
}
otherInjector.setInstance(AA, { aaa: "123" });

class TestService5Type {}

@Injectable({
  injector: otherInjector,
  provide: TestService5Type,
})
class TestService5 {}

@Injectable({ injector: otherInjector })
class TestService4 {
  @Inject({ injector: otherInjector }) public aaa: TestService5Type;
}

class TestService {
  @Inject({ injector: otherInjector }) public aaa: TestService2;
  @Inject({ injector: otherInjector }) public aaa2: TestService4;
  @Inject({ injector: otherInjector }) public aaab: AA;
}

const aaa = new TestService();
console.log(55555555, aaa);
