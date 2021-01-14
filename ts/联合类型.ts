/**
 * 希望属性是多种类型之一，使用 | 作为标记
 * @param command
 */
function formatCommandline(command: string[] | string) {
  let line = "";
  if (typeof command === "string") {
    line = command.trim();
  } else {
    line = command.join(" ").trim();
  }

  // Do stuff with line: string
}





// interface ValueEnumObj {
//   all: ObjItem,
//   open: ObjItem,
//   closed: ObjItem,
//   processing: ObjItem,
// }

type EnumItem = {
  text: string;
  status: string;
}

interface ValueEnumObj {
  [key: string]: EnumItem,
}

const valueEnum: ValueEnumObj= {
  all: { text: '全部', status: 'Default' },
  open: {
    text: '未解决',
    status: 'Error',
  },
  closed: {
    text: '已解决',
    status: 'Success',
  },
  processing: {
    text: '解决中',
    status: 'Processing',
  },
}










interface ObjectOf<V> {
  [_: string]: V
}

class OrderItem {
  uuid: string;
  amount?: number;
  secondaryTotal?: number;
  total?: number;
  originalTotal?: number;
  checked?: boolean;
}


interface State {
  promoList: {
     giftCheck:ObjectOf<OrderItem>
     freeCheck:Array<OrderItem>
   }
 }

 const testObj: State = {
  promoList: {
    giftCheck: {
      kk: {
        uuid: 'SS',
        amount: 1
      }
    },
    freeCheck: [{uuid: 'ss'}]
  }
 }