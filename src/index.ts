// object using interface
interface isInfo {
  title: string;
  status: boolean;
  id: number;
}

let info: isInfo = {
  title: "masai",
  status: true,
  id: 4,
};

interface userInfo {
  firstname: string;
  lastname?: string;
}

const funUser = ({ firstname, lastname }: userInfo): void => {
  if (firstname !== undefined && lastname !== undefined) {
    console.log(firstname + " " + lastname);
  } else {
    console.log(firstname);
  }
};
let preson: userInfo = {
  firstname: "Masai",
  lastname: "School",
};
funUser(preson);

// third Address

interface Address {
  houseNo: number;
  street: string;
  city: string;
  state: string;
  postCode: number;
  country: string;
}

// 4 PresonDetails

interface PresonDetails {
  Prefix?: string;
  phone: number;
  addresses: string;
  email: string | number;
  firstname: string;
  lastname: string;
  middlename?: string;
}

// 5. PhoneBook

let arrPerson  =[];
let Person3:PresonDetails={
  phone:4564565,
  addresses:"mumbai",
  email:"adss58@gmail.com",
  firstname:"Masai",
  lastname:"School"
}
arrPerson.push(Person3)


console.log(arrPerson);
