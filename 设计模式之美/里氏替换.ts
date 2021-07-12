abstract class PostalAddress {
  Addressee: string;
  Country: string;
  PostalCode: string;
  City: string;
  Street: string;
  House: number;

  /*
   * @returns Formatted full address
   */
  abstract WriteAddress(): string;
}

class ItalyPostalAddress extends PostalAddress {
  City = "Roma";
  WriteAddress(): string {
    return "Formatted Address Italy " + this.City;
  }
}
class UKPostalAddress extends PostalAddress {
  City = "London";
  WriteAddress(): string {
    return "Formatted Address UK " + this.City;
  }
}
class USAPostalAddress extends PostalAddress {
  City = "Washington D.C.";
  WriteAddress(): string {
    return "Formatted Address USA " + this.City;
  }
}

class AddressWriter {
  PrintPostalAddress(writer: PostalAddress): string {
    return writer.WriteAddress();
  }
}

const italyPostalAddress = new ItalyPostalAddress();
const uKPostalAddress = new UKPostalAddress();
const uSAPostalAddress = new USAPostalAddress();

const addressWriter = new AddressWriter();

addressWriter.PrintPostalAddress(italyPostalAddress);
addressWriter.PrintPostalAddress(uKPostalAddress);
addressWriter.PrintPostalAddress(uSAPostalAddress);
