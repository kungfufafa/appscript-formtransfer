// Define the approval flows in this object
const FLOWS = {
  defaultFlow: [
    {
      email: "kecilnazira@gmail.com",
      name: "Arik (default 1)",
      title: "Team Lead",
      phone: "628987367621"
    },
    {
      email: "kecilnazira@gmail.com",
      name: "Arik (default 2)",
      title: "Manager",
      phone: "628987367621"
    }
  ],
  IT: [
    {
      email: "arikfio@completeselular.com",
      name: "Arik Cahya Hidayat",
      title: "IT Manager",
      phone: "08987367621"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  HCM: [
    {
      email: "ester@completeselular.com",
      name: "Ester Septiany",
      title: "HR Manager",
      phone: "6281575216729"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  CSO: [
    {
      email: "jejen@mediaselularindonesia.com",
      name: "Jejen Mutakhir",
      title: "DSM",
      phone: "62812319148"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  Markom: [
    {
      email: "fiki.concepto@gmail.com",
      name: "Zulfikri Suprahmadi",
      title: "Markom Coordinator",
    },
    {
      email: "firman.syahbana@mediaselularindonesia.com",
      name: "Firman Syahbana",
      title: "COO",
      phone: "628112109181"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  Purchase: [
    {
      email: "erny@completeselular.com",
      name: "Erniati",
      title: "SCM",
      phone: "628112318943"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  Retur: [
    {
      email: "erny@completeselular.com",
      name: "Erniati",
      title: "SCM",
      phone: "628112318943"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  AR: [
    {
      email: "dina@completeselular.com",
      name: "Dina Febria Damayanti",
      title: "AR Coordinator",
      phone: "628999395939"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  Warehouse: [
    {
      email: "dian@completeselular.com",
      name: "Dian Fatmawati",
      title: "Warehouse Coordinator",
      phone: "6283861673322"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  WAREHOUSEMKLINON: [
    {
      email: "dian@completeselular.com",
      name: "Dian Fatmawati",
      title: "Warehouse Coordinator",
      phone: "6283861673322"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga Pratama Hadi",
      title: "FAT Manager",
      phone: "6285692578075"
    }
  ],
  HCMMKLINON: [
    {
      email: "ester@completeselular.com",
      name: "Ester Septiany",
      title: "HR Manager",
      phone: "6281575216729"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  CSOMKLINON: [
    {
      email: "agus.supangat@gmail.com",
      name: "Agus Supangat",
      title: "CSO",
      phone: "62818923822"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  DATAMKLINON: [
    {
      email: "agus.supangat@gmail.com",
      name: "Agus Supangat",
      title: "CSO",
      phone: "62818923822"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    },
  ],
  EOMKLINON: [
    {
      email: "agus.supangat@gmail.com",
      name: "Agus Supangat",
      title: "CSO",
      phone: "62818923822"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    },
  ],
  RISMNON: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator",
      phone: "6285315586289"
    }
  ],
  Logistic: [
    {
      email: "dian@completeselular.com",
      name: "Dian Fatmawati",
      title: "Oprasional Manager",
      phone: "6283861673322"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  Online: [
    {
      email: "arikfio@completeselular.com",
      name: "Arik Cahya Hidayat",
      title: "Online Coordinator",
      phone: "628987367621"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  Retail: [
    {
      email: "william@completeselular.com",
      name: "William Surya Putra",
      title: "RSM",
      phone: "6281911430434"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  Data: [
    {
      email: "aryhidayat@completeselular.com",
      name: "Ary Hidayat",
      title: "Data Coordinator",
      phone: "6283836362117"
    },
    {
      email: "firman.syahbana@mediaselularindonesia.com",
      name: "Firman Syahbana",
      title: "COO",
      phone: "628112109181"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  IA: [
    {
      email: "adi@completeselular.com",
      name: "Albertus Maria Adi N.",
      title: "Business Coordinator",
      phone: "628112449612"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  AUDITMKLINON: [
    {
      email: "adi@completeselular.com",
      name: "Albertus Maria Adi N.",
      title: "Business Coordinator",
      phone: "628112449612"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  AP: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  FINANCEMKLINON: [
    {
      email: "yoga@autoev.co.id",
      name: "Yoga Pratama Hadi",
      title: "FAT Manager",
      phone: "6285692578075"
    }
  ],
  Pajak: [
    {
      email: "anedss.tax@gmail.com",
      name: "Anne",
      title: "Tax Leader",
      phone: "6281779508689"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  Transfer: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  Kas: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  Mitra: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  Accounting: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  Busdev: [
    {
      email: "arikfio@completeselular.com",
      name: "Arik Cahya Hidayat",
      title: "BDC",
      phone: "628987367621"
    },
    {
      email: "vega@completeselular.com",
      name: "Vega Veronica",
      title: "HR Manager"
    }
  ]
}

function App() {
  this.form = FormApp.getActiveForm()
  this.formUrl = this.form.getPublishedUrl()
  this.url = "https://script.google.com/macros/s/AKfycbw3yM5fX48ViXK0lmIKsUREDQ4H_C84jJiuVf0qtIVbrIBdLudibWqB2cwzF-LMpFNu/exec" // IMPORTANT - copy the web app url after deploy
  this.title = this.form.getTitle()
  this.desription = this.form.getDescription()
  this.sheetname = "Form Responses 2" // DO NOT change - the default google form responses sheet name
  this.flowHeader = "Divisi" // IMPORTANT - key field for your flows
  this.uidHeader = "_uid"
  this.uidPrefix = "OL-"
  this.uidLength = 5
  this.statusHeader = "_status"
  this.responseIdHeader = "_response_id"
  this.emailHeader = "Email Address"  // DO NOT CHANGE - make sure email collection is enabled in Google Form

  this.pending = "Pending"
  this.approved = "Approved"
  this.rejected = "Rejected"
  this.waiting = "Waiting"

  this.sheet = (() => {
    let sheet
    try {
      const id = this.form.getDestinationId()
      sheet = SpreadsheetApp.openById(id)
    } catch (e) {
      const id = this.form.getId()
      const file = DriveApp.getFileById(id)
      const parentFolder = file.getParents().next()
      const spreadsheet = SpreadsheetApp.create(this.title + " (Responses)")
      const ssId = spreadsheet.getId()
      this.form.setDestination(FormApp.DestinationType.SPREADSHEET, ssId)
      DriveApp.getFileById(ssId).moveTo(parentFolder)
      sheet = spreadsheet
    }
    return sheet.getSheetByName(this.sheetname)
  })()

  this.parsedValues = () => {
    const values = this.sheet.getDataRange().getDisplayValues()
    const parsedValues = values.map(value => {
      return value.map(cell => {
        try {
          return JSON.parse(cell)
        } catch (e) {
          return cell
        }
      })
    })
    return parsedValues
  }

  this.getTaskById = (id) => {
    const values = this.parsedValues()
    const record = values.find(value => value.some(cell => cell.taskId === id))
    const row = values.findIndex(value => value.some(cell => cell.taskId === id)) + 1

    const headers = values[0]
    const statusColumn = headers.indexOf(this.statusHeader) + 1
    let task
    let approver
    let nextApprover
    let column
    let approvers
    let email
    let status
    let responseId
    if (record) {
      task = record.slice(0, headers.indexOf(this.statusHeader) + 1).map((item, i) => {
        return {
          label: headers[i],
          value: item
        }
      })
      email = record[headers.indexOf(this.emailHeader)]
      status = record[headers.indexOf(this.statusHeader)]
      responseId = record[headers.indexOf(this.responseIdHeader)]
      approver = record.find(item => item.taskId === id)
      column = record.findIndex(item => item.taskId === id) + 1
      nextApprover = record[record.findIndex(item => item.taskId === id) + 1]
      approvers = record.filter(item => item.taskId)
    }
    return { email, status, responseId, task, approver, nextApprover, approvers, row, column, statusColumn }
  }

  this.getResponseById = (id) => {
    const values = this.parsedValues()
    const record = values.find(value => value.some(cell => cell === id))
    const headers = values[0]
    let task
    let approvers
    let status
    if (record) {
      task = record.slice(0, headers.indexOf(this.statusHeader) + 1).map((item, i) => {
        return {
          label: headers[i],
          value: item
        }
      })
      status = record[headers.indexOf(this.statusHeader)]
      approvers = record.filter(item => item.taskId)
    }
    return { task, approvers, status }
  }

  this.createUid = () => {
    const props = PropertiesService.getDocumentProperties()
    let uid = Number(props.getProperty(this.uidHeader))
    if (!uid) uid = 1

    props.setProperty(this.uidHeader, uid + 1)
    return this.uidPrefix + (uid + 10 ** this.uidLength).toString().slice(-this.uidLength)
  }

  this.resetUid = () => {
    const props = PropertiesService.getDocumentProperties()
    props.deleteProperty(this.uidHeader)
  }

  this.sendApproval = ({ task, approver, approvers }) => {
    Logger.log('Mengirim approval ke: ' + approver.email);
    Logger.log('Nomor Telepon Approver: ' + approver.phone);

    const template = HtmlService.createTemplateFromFile("approval_email.html")
    template.title = this.title
    template.task = task
    template.approver = approver
    template.approvers = approvers
    template.actionUrl = `${this.url}?taskId=${approver.taskId}`
    template.formUrl = this.formUrl

    template.approved = this.approved
    template.rejected = this.rejected
    template.pending = this.pending
    template.waiting = this.waiting

    const subject = "Approval Required - " + this.title

    const options = {
      htmlBody: template.evaluate().getContent()
    }
    GmailApp.sendEmail(approver.email, subject, "", options)

    // Ambil data dari form untuk message WhatsApp
    const uid = task.find(t => t.label === '_uid').value;
    const emailAddr = task.find(t => t.label === 'Email Address').value;
    const name = task.find(t => t.label === 'Nama').value;
    const division = task.find(t => t.label === 'Divisi').value;
    const rekening = task.find(t => t.label === 'Nomer Rekening').value;
    const rekeningOwner = task.find(t => t.label === 'Nama Pemilik Rekening').value;
    const bank = task.find(t => t.label === 'Bank').value;
    const transferAmount = task.find(t => t.label === 'Jumlah Transfer').value;
    const purpose = task.find(t => t.label === 'Keperluan').value;
    const reffnote = task.find(t => t.label === 'Reffnote').value;
    const statusTransfer = task.find(t => t.label === 'Status Transfer').value;
    const attacmentInvoice = task.find(t => t.label === 'Lampiran Invoice (Jika ada)').value;

    // Template message WhatsApp
    const whatsappMessage =
      `*📣 NOTIFIKASI APPROVAL - ${this.title}*\n\n` +
      `*UID:* ${uid}\n` +
      `*Email:* ${emailAddr}\n` +
      `*Nama:* ${name}\n` +
      `*Divisi:* ${division}\n\n` +
      `*Nomor Rekening:* ${rekening}\n` +
      `*Nama Pemilik Rekening:* ${rekeningOwner}\n` +
      `*Bank:* ${bank}\n` +
      `*Jumlah Transfer:* ${transferAmount}\n` +
      `*Keperluan:* ${purpose}\n` +
      `*Reffnote:* ${reffnote}\n` +
      `*Lampiran Invoice (Jika ada):* ${attacmentInvoice || 'Tidak ada'}\n` +  // Tampilkan 'Tidak ada' jika lampiran tidak tersedia
      `*Status Transfer:* ${statusTransfer}\n\n` +
      `*Klik link berikut untuk Approve atau Reject:* \n` +
      `${this.url}?taskId=${approver.taskId}&action=approve\n\n` +
      `— *Bot by IT*`;

    Logger.log(`Processing approver: ${approver.name}, Phone: ${approver.phone}`);
    const phoneNumber = approver.phone;
    if (phoneNumber) {
      Logger.log(`Sending WhatsApp to: ${phoneNumber}`);
      sendWhatsApp(phoneNumber, whatsappMessage);  // Fungsi sendWhatsApp
    } else {
      Logger.log(`No phone number found for approver: ${approver.name}`);
    }
  }

  this.sendNotification = (taskId) => {
    const { email, responseId, status, task, approvers } = this.getTaskById(taskId)
    console.log({ email, status, task, approvers })

    const template = HtmlService.createTemplateFromFile("notification_email.html")
    template.title = this.title
    template.task = task
    template.status = status
    template.approvers = approvers
    template.formUrl = this.formUrl
    template.approvalProgressUrl = `${this.url}?responseId=${responseId}`

    template.approved = this.approved
    template.rejected = this.rejected
    template.pending = this.pending
    template.waiting = this.waiting

    const subject = `Approval ${status} - ${this.title}`

    const options = {
      htmlBody: template.evaluate().getContent()
    }
    GmailApp.sendEmail(email, subject, "", options)
  }

  // add addtional data to form response when update
  this.onFormSubmit = () => {
    const values = this.parsedValues()
    const headers = values[0]
    let lastRow = values.length
    let startColumn = headers.indexOf(this.uidHeader) + 1
    if (startColumn === 0) startColumn = headers.length + 1

    const responses = this.form.getResponses()
    const lastResponse = responses[responses.length - 1]
    const responseId = lastResponse.getId()
    const newHeaders = [this.uidHeader, this.statusHeader, this.responseIdHeader]
    const newValues = [this.createUid(), this.pending, responseId]

    const flowKey = values[lastRow - 1][headers.indexOf(this.flowHeader)]
    const flow = FLOWS[flowKey] || FLOWS.defaultFlow
    let taskId
    flow.forEach((item, i) => {
      newHeaders.push("_approver_" + (i + 1))

      item.comments = null
      item.taskId = Utilities.base64EncodeWebSafe(Utilities.getUuid())
      item.timestamp = new Date()
      if (i === 0) {
        item.status = this.pending
        taskId = item.taskId
      } else {
        item.status = this.waiting
      }
      if (i !== flow.length - 1) {
        item.hasNext = true
      } else {
        item.hasNext = false
      }
      newValues.push(JSON.stringify(item))
    })

    this.sheet.getRange(1, startColumn, 1, newHeaders.length)
      .setValues([newHeaders])
      .setBackgroundColor("#34A853")
      .setFontColor("#FFFFFF")

    this.sheet.getRange(lastRow, startColumn, 1, newValues.length).setValues([newValues])

    this.sendNotification(taskId)
    const { task, approver, approvers } = this.getTaskById(taskId)
    this.sendApproval({ task, approver, approvers })
  }

  this.approve = ({ taskId, comments }) => {
    const { task, approver, approvers, nextApprover, row, column, statusColumn } = this.getTaskById(taskId)
    if (!approver) return
    approver.comments = comments
    approver.status = this.approved
    approver.timestamp = new Date()
    this.sheet.getRange(row, column).setValue(JSON.stringify(approver))
    if (approver.hasNext) {
      nextApprover.status = this.pending
      nextApprover.timestamp = new Date()
      this.sheet.getRange(row, column + 1).setValue(JSON.stringify(nextApprover))
      this.sendApproval({ task, approver: nextApprover, approvers })
    } else {
      this.sheet.getRange(row, statusColumn).setValue(this.approved)
      this.sendNotification(taskId)
    }
  }

  this.reject = ({ taskId, comments }) => {
    const { task, approver, nextApprover, row, column, statusColumn } = this.getTaskById(taskId)
    if (!approver) return
    approver.comments = comments
    approver.status = this.rejected
    approver.timestamp = new Date()
    this.sheet.getRange(row, column).setValue(JSON.stringify(approver))
    this.sheet.getRange(row, statusColumn).setValue(this.rejected)
    this.sendNotification(taskId)
  }
}

function _onFormSubmit() {
  const app = new App()
  app.onFormSubmit()
}

function approve({ taskId, comments }) {
  const app = new App()
  app.approve({ taskId, comments })
}

function reject({ taskId, comments }) {
  const app = new App()
  app.reject({ taskId, comments })
}

function include(filename) {
  return HtmlService.createTemplateFromFile(filename).evaluate().getContent()
}


function doGet(e) {
  const { taskId, responseId } = e.parameter
  const app = new App()
  let template
  if (taskId) {
    template = HtmlService.createTemplateFromFile("index")
    const { task, approver, approvers, status } = app.getTaskById(taskId)
    template.task = task
    template.status = status
    template.approver = approver
    template.approvers = approvers
    template.url = `${app.url}?taskId=${taskId}`
  } else if (responseId) {
    template = HtmlService.createTemplateFromFile("approval_progress")
    const { task, approvers, status } = app.getResponseById(responseId)
    template.task = task
    template.status = status
    template.approvers = approvers
  } else {
    template = HtmlService.createTemplateFromFile("404.html")
  }

  template.title = app.title
  template.pending = app.pending
  template.approved = app.approved
  template.rejected = app.rejected
  template.waiting = app.waiting

  const htmlOutput = template.evaluate()
  htmlOutput.setTitle(app.title)
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
  return htmlOutput
}

function resetUid() {
  const app = new App()
  app.resetUid()
}

function createTrigger() {
  const functionName = "_onFormSubmit"
  const triggers = ScriptApp.getProjectTriggers()
  const match = triggers.find(trigger => trigger.getHandlerFunction() === functionName)
  if (match) return
  return ScriptApp.newTrigger(functionName).forForm(FormApp.getActiveForm()).onFormSubmit().create()
}

function onOpen() {
  const trigger = createTrigger()
  const ui = FormApp.getUi()
  const menu = ui.createMenu("Approval")
  menu.addItem("Reset UID", "resetUid")
  if (trigger) menu.addItem("Create trigger", "createTrigger")
  menu.addToUi()
}

function sendWhatsApp(phoneNumber, message) {
  const whatsappUrl = 'https://wa.rizqis.com/api/send-message';
  const apiKey = 'b2d95af932eedb4de92b3496f338aa5f97b36rrq0';
  const sender = '6285147721177';

  const fullUrl = `${whatsappUrl}?apikey=${apiKey}&sender=${sender}&receiver=${phoneNumber}&message=${encodeURIComponent(message)}`;

  const options = {
    'method': 'get',
    'muteHttpExceptions': true
  };

  try {
    const response = UrlFetchApp.fetch(fullUrl, options);
    Logger.log(`WhatsApp message sent to ${phoneNumber}: ` + response.getContentText());
  } catch (error) {
    Logger.log('WhatsApp API Error: ' + error.message);
  }
}

function resendWhatsAppMessageForUid() {
  const targetUid = 'TR-07730';  // UID yang akan diproses

  const sheet = SpreadsheetApp.openById('1hFQeRuzqhKLylfjrgFB82Tq6Mp5D6CRjq7mg_J8pZn8').getSheetByName('Form Responses 2');
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const getColumnIndex = (headerName) => headers.indexOf(headerName);
  const uidColumnIndex = getColumnIndex('_uid');
  let targetRow = null;

  for (let i = 1; i < data.length; i++) {
    if (data[i][uidColumnIndex] === targetUid) {
      targetRow = data[i];
      Logger.log(`Task dengan UID ${targetUid} ditemukan di baris ke-${i + 1}`);
      break;
    }
  }

  if (targetRow) {
    const emailAddr = targetRow[getColumnIndex('Email Address')];
    const name = targetRow[getColumnIndex('Nama')];
    const division = targetRow[getColumnIndex('Divisi')];
    const rekening = targetRow[getColumnIndex('Nomer Rekening')];
    const rekeningOwner = targetRow[getColumnIndex('Nama Pemilik Rekening')];
    const bank = targetRow[getColumnIndex('Bank')];
    const transferAmount = targetRow[getColumnIndex('Jumlah Transfer')];
    const purpose = targetRow[getColumnIndex('Keperluan')];
    const reffnote = targetRow[getColumnIndex('Reffnote')];
    const attacmentInvoice = targetRow[getColumnIndex('Lampiran Invoice (Jika ada)')];
    const statusTransfer = targetRow[getColumnIndex('Status Transfer')];

    let approverIndex = 0;
    let approverKey = `_approver_${approverIndex + 1}`;
    let approverData = targetRow[getColumnIndex(approverKey)] ? JSON.parse(targetRow[getColumnIndex(approverKey)]) : null;
    let sentMessage = false;

    while (approverData) {
      if (approverData.status === "Pending") {
        const message = `*📣 NOTIFIKASI APPROVAL - FORM TRANSFER ONLINE*\n\n` +
          `*UID:* ${targetUid}\n` +
          `*Email:* ${emailAddr}\n` +
          `*Nama:* ${name}\n` +
          `*Divisi:* ${division}\n\n` +
          `*Nomor Rekening:* ${rekening}\n` +
          `*Nama Pemilik Rekening:* ${rekeningOwner}\n` +
          `*Bank:* ${bank}\n` +
          `*Jumlah Transfer:* ${transferAmount}\n` +
          `*Keperluan:* ${purpose}\n` +
          `*Reffnote:* ${reffnote}\n` +
          `*Lampiran Invoice (Jika ada):* ${attacmentInvoice || 'Tidak ada'}\n` +  // Menampilkan 'Tidak ada' jika lampiran tidak tersedia
          `*Status Transfer:* ${statusTransfer}\n\n` +
          `*Klik link berikut untuk Approve atau Reject:* \n` +
          `https://script.google.com/macros/s/AKfycbw3yM5fX48ViXK0lmIKsUREDQ4H_C84jJiuVf0qtIVbrIBdLudibWqB2cwzF-LMpFNu/exec?taskId=${approverData.taskId}&action=approve\n\n` +  // Menggunakan taskId di sini
          `— *Bot by IT*`;

        sendWhatsApp(approverData.phone, message);
        Logger.log(`Sending WhatsApp message to approver ${approverData.name} with phone: ${approverData.phone}`);
        sentMessage = true;  // Menandakan bahwa pesan telah dikirim
      }

      approverIndex++;
      approverKey = `_approver_${approverIndex + 1}`;
      approverData = targetRow[getColumnIndex(approverKey)] ? JSON.parse(targetRow[getColumnIndex(approverKey)]) : null;
    }

    if (!sentMessage) {
      Logger.log(`Tidak ada pesan WhatsApp yang dikirim untuk task dengan UID ${targetUid} karena tidak ada approver yang statusnya "Pending".`);
    }

  } else {
    Logger.log(`Task dengan _uid ${targetUid} tidak ditemukan.`);
  }
}