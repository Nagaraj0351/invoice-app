import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import invoiceConstants from "../constants";

class InvoiceStore extends EventEmitter {
  constructor() {
    super();
    this.invoiceItems = [
      {
        work_type: "Plumber",
        work_hours: 4,
        materials: "copper, pvc",
        expenses: 400,
        labour: "Raja",
      },
      {
        work_type: "Mason",
        work_hours: 8,
        materials: "Trowels, Plastering Trowels",
        expenses: 600,
        labour: "Govind",
      },
      {
        work_type: "Electrician",
        work_hours: 3,
        materials: "wires, Spanners, Hacksaws",
        expenses: 400,
        labour: "Arun",
      },
    ];
  }

  addInvoiceItem({ work_type, work_hours, materials, expenses, labour }) {
    const id = Date.now();

    this.invoiceItems.push({
      id,
      work_type,
      work_hours,
      materials,
      expenses,
      labour,
    });

    this.emit("change");
  }

  getAll() {
    return this.invoiceItems;
  }

  handleActions(action) {
    switch (action.type) {
      case invoiceConstants.ADD_NEW_ITEM:
        this.addInvoiceItem(action.rowData);
        break;

      default:
        return null;
    }
  }
}

const invoiceStore = new InvoiceStore();
dispatcher.register(invoiceStore.handleActions.bind(invoiceStore));

export default invoiceStore;
