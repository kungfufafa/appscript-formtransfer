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
      phone: "628987367621"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
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
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  CSO: [
    {
      email: "rika@mail.topselular.com",
      name: "Ibu Rika",
      title: "CSO",
      phone: "+"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  Oraimo: [
    {
      email: "rika@mail.topselular.com",
      name: "Ibu Rika",
      title: "CSO",
      phone: "+"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  Markom: [
    {
      email: "firman.syahbana@mediaselularindonesia.com",
      name: "Firman Syahbana",
      title: "COO",
      phone: "628112109181"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  HRPLUS: [
    {
      email: "ester@completeselular.com",
      name: "Ester Septiany",
      title: "HR Manager",
      phone: "6281575216729"
    },
    {
      email: "yukesantoso@completeselular.com",
      name: "Yuke Santoso",
      title: "CEO",
      phone: "6283861670777"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  Purchase: [
    {
      email: "rika@mail.topselular.com",
      name: "Ibu Rika",
      title: "CSO",
      phone: "+"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
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
      title: "Finance Manager",
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
      email: "firman.syahbana@mediaselularindonesia.com",
      name: "Firman Syahbana",
      title: "COO",
      phone: "628112109181"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  WarehousePIK: [
    {
      email: "faisal@completeselular.com",
      name: "Faisal",
      title: "Warehouse Coordinator",
      phone: "+"
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
      title: "Finance Manager",
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
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  Logistic: [
    {
      email: "dian@completeselular.com",
      name: "Dian Fatmawati",
      title: "Warehouse Coordinator",
      phone: "6283861673322"
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
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  Online: [
    {
      email: "vinzrvt@gmail.com",
      name: "Kevin",
      title: "SPV Online",
      phone: "6281911430434"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
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
      email: "jejen@mediaselularindonesia.com",
      name: "Jejen Mutakhir",
      title: "COO",
      phone: "62812319148"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
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
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  AP: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  Online2: [
    {
      email: "william@completeselular.com",
      name: "William Surya Putra",
      title: "RSM",
      phone: "6281911430434"
    }
  ],
  Pajak: [
    {
      email: "anedss.tax@gmail.com",
      name: "Anne",
      title: "Tax Leader",
      phone: "081779508689"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  Transfer: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  Kas: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  Mitra: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  Accounting: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ],
  Busdev: [
    {
      email: "ester@completeselular.com",
      name: "Ester Septiany",
      title: "HR Manager",
      phone: "6281575216729"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Finance Manager",
      phone: "6283875820728"
    }
  ]
}

function App() {
  this.form = FormApp.getActiveForm()
  this.formUrl = this.form.getPublishedUrl()
  this.url = "https://script.google.com/macros/s/AKfycbxXiRMNvukuJDB4t8m9uMP365X7mgj2LmonbpmP0L_mBCMXnUCIT-bz9_0N1kdjggW5/exec" // IMPORTANT - copy the web app url after deploy
  this.title = this.form.getTitle()
  this.desription = this.form.getDescription()
  this.sheetname = 'Form Responses 1' // DO NOT change - the default google form responses sheet name
  this.flowHeader = "Divisi" // IMPORTANT - key field for your flows
  this.uidHeader = "_uid"
  this.uidPrefix = "SMI-"
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

  this.getAttachmentsByResponseId = (responseId) => {
    if (!responseId) return []

    try {
      const response = this.form.getResponses().find(item => item.getId() === responseId)
      if (!response) return []

      const attachments = []
      response.getItemResponses().forEach(itemResponse => {
        const item = itemResponse.getItem()
        if (item.getType() !== FormApp.ItemType.FILE_UPLOAD) return

        const fileIds = itemResponse.getResponse()
        const ids = Array.isArray(fileIds) ? fileIds : (fileIds ? [fileIds] : [])

        ids.forEach(fileId => {
          try {
            attachments.push(DriveApp.getFileById(fileId).getBlob())
          } catch (e) {
            console.error(`Failed to attach file ${fileId}: ${e.message}`)
          }
        })
      })

      return attachments
    } catch (e) {
      console.error(`Failed to get attachments for response ${responseId}: ${e.message}`)
      return []
    }
  }

  this.sendApproval = ({ task, approver, approvers, responseId }) => {
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
    const attachments = this.getAttachmentsByResponseId(responseId)

    const options = {
      htmlBody: template.evaluate().getContent(),
      attachments: attachments
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
    const attachments = this.getAttachmentsByResponseId(responseId)

    const options = {
      htmlBody: template.evaluate().getContent(),
      attachments: attachments
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
      .setFontColor("#000000")

    this.sheet.getRange(lastRow, startColumn, 1, newValues.length).setValues([newValues])

    this.sendNotification(taskId)
    const { task, approver, approvers } = this.getTaskById(taskId)
    this.sendApproval({ task, approver, approvers, responseId })
  }

  this.approve = ({ taskId, comments }) => {
    const { task, approver, approvers, nextApprover, responseId, row, column, statusColumn } = this.getTaskById(taskId)
    if (!approver) return
    approver.comments = comments
    approver.status = this.approved
    approver.timestamp = new Date()
    this.sheet.getRange(row, column).setValue(JSON.stringify(approver))
    if (approver.hasNext) {
      nextApprover.status = this.pending
      nextApprover.timestamp = new Date()
      this.sheet.getRange(row, column + 1).setValue(JSON.stringify(nextApprover))
      this.sendApproval({ task, approver: nextApprover, approvers, responseId })
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
  const apiKey = 'b2d95af932eedb4de92b3496f338aa5f97b36rrq0'; // Ganti dengan API key yang valid
  const sender = '6287815742597'; // Nomor pengirim WhatsApp

  const fullUrl = `${whatsappUrl}?apikey=${apiKey}&sender=${sender}&receiver=${phoneNumber}&message=${encodeURIComponent(message)}`;

  const options = {
    method: 'get',
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch(fullUrl, options);
    Logger.log(`Pesan WhatsApp dikirim ke ${phoneNumber}: ` + response.getContentText());
  } catch (error) {
    Logger.log('Kesalahan API WhatsApp: ' + error.message);
  }
}

function testWhatsappSend() {
  const phoneNumber = '628987367621'; // Ganti dengan nomor WhatsApp tujuan
  const message = 'Ini adalah pesan pengujian dari Google Apps Script untuk API WhatsApp.';

  sendWhatsApp(phoneNumber, message);
}

function resendWhatsAppMessageForUid() {
  const targetUid = 'UID-10242';
  const targetPhone = '62895636786435'; // Nomor tujuan Fonnte

  const sheet = SpreadsheetApp
    .openById('1y66ZXpwGNN2nv61HZ7ctadaq_bHap1UnIAp3zGodGEA')
    .getSheetByName('Form Responses 1');

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
    let approverData = targetRow[getColumnIndex(approverKey)]
      ? JSON.parse(targetRow[getColumnIndex(approverKey)])
      : null;

    let sentMessage = false;

    while (approverData) {
      if (approverData.status === "Pending") {
        const message =
          `*📣 NOTIFIKASI APPROVAL - FORM TRANSFER CV. TOP SELULAR NEW*\n\n` +
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
          `*Lampiran Invoice (Jika ada):* ${attacmentInvoice || 'Tidak ada'}\n` +
          `*Status Transfer:* ${statusTransfer}\n\n` +
          `*Klik link berikut untuk Approve atau Reject:*\n` +
          `https://script.google.com/macros/s/AKfycbwKiet7gVLphsJemBkxaXx1Hkd3Td7JGPO3ywx8FTgvv8fqOnuoXUzXR7uNkKkTznMQDQ/exec?taskId=${approverData.taskId}&action=approve\n\n` +
          `— *Bot by IT*`;

        sendFonnteMessage(targetPhone, message);

        Logger.log(`Pesan Fonnte dikirim ke nomor: ${targetPhone}`);
        sentMessage = true;
      }

      approverIndex++;
      approverKey = `_approver_${approverIndex + 1}`;

      approverData = targetRow[getColumnIndex(approverKey)]
        ? JSON.parse(targetRow[getColumnIndex(approverKey)])
        : null;
    }

    if (!sentMessage) {
      Logger.log(`Tidak ada pesan WhatsApp yang dikirim untuk task dengan UID ${targetUid} karena tidak ada approver yang statusnya "Pending".`);
    }

  } else {
    Logger.log(`Task dengan _uid ${targetUid} tidak ditemukan.`);
  }
}


function sendFonnteMessage(phone, message) {
  const token = 'ss3dxvrG38MgXbY4q1Lc';

  const url = 'https://api.fonnte.com/send';

  const payload = {
    target: phone,
    message: message
  };

  const options = {
    method: 'post',
    headers: {
      Authorization: token
    },
    payload: payload,
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(url, options);

  Logger.log(response.getContentText());
}

function resendEmailMessageForUid() {
  const targetUid = 'UID-09430';  // UID yang akan diproses

  const SPREADSHEET_ID = '1y66ZXpwGNN2nv61HZ7ctadaq_bHap1UnIAp3zGodGEA';
  const SHEET_NAME = 'Form Responses 1';

  const app = new App(); // dipakai untuk getTaskById + properti template yang sama

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  const headers = data[0];

  const col = (headerName) => headers.indexOf(headerName);

  const uidCol = col('_uid');
  if (uidCol < 0) throw new Error('Kolom "_uid" tidak ditemukan.');

  let targetRow = null;
  for (let i = 1; i < data.length; i++) {
    if (data[i][uidCol] === targetUid) {
      targetRow = data[i];
      Logger.log(`Task dengan UID ${targetUid} ditemukan di baris ke-${i + 1}`);
      break;
    }
  }

  if (!targetRow) {
    Logger.log(`Task dengan _uid ${targetUid} tidak ditemukan.`);
    return;
  }

  // loop approver _approver_1 ... _approver_n
  let approverIndex = 0;
  let sent = false;

  while (true) {
    const approverKey = `_approver_${approverIndex + 1}`;
    const approverCol = col(approverKey);

    if (approverCol < 0) break; // header approver sudah habis

    const cell = targetRow[approverCol];
    if (!cell) break; // kolom ada tapi isi kosong -> stop

    let approverData;
    try {
      approverData = (typeof cell === 'string') ? JSON.parse(cell) : cell;
    } catch (e) {
      Logger.log(`Gagal parse JSON ${approverKey} untuk UID ${targetUid}: ${e.message}`);
      break;
    }

    if (approverData && approverData.status === app.pending) {
      // Ambil struktur task/approver/approvers versi App() biar template sama persis
      const { task, approver, approvers } = app.getTaskById(approverData.taskId);

      if (!approver || !approver.email) {
        Logger.log(`Approver pending tapi data/email tidak valid. UID: ${targetUid}, key: ${approverKey}`);
      } else {
        // ====== COPY PERSIS LOGIC EMAIL DARI sendApproval() ======
        const template = HtmlService.createTemplateFromFile("approval_email.html");
        template.title = app.title;
        template.task = task;
        template.approver = approver;
        template.approvers = approvers;
        template.actionUrl = `${app.url}?taskId=${approver.taskId}`;
        template.formUrl = app.formUrl;

        template.approved = app.approved;
        template.rejected = app.rejected;
        template.pending = app.pending;
        template.waiting = app.waiting;

        const subject = "Approval Required - " + app.title;

        const options = {
          htmlBody: template.evaluate().getContent()
        };

        GmailApp.sendEmail(approver.email, subject, "", options);
        // ========================================================

        Logger.log(`Resend EMAIL dikirim ke: ${approver.email} | ${approver.name || '-'} | UID: ${targetUid}`);
        sent = true;
      }
    }

    approverIndex++;
  }

  if (!sent) {
    Logger.log(`Tidak ada EMAIL yang dikirim untuk UID ${targetUid} karena tidak ada approver yang statusnya "${app.pending}".`);
  }
}