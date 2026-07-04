// Define the approval flows in this object
const FLOWS = {
  defaultFlow: [
    {
      email: "kecilnazira@gmail.com",
      name: "Arik (default 1)",
      title: "Team Lead"
    },
    {
      email: "kecilnazira@gmail.com",
      name: "Arik (default 2)",
      title: "Manager"
    }
  ],
  IT: [
    {
      email: "arikfio@completeselular.com",
      name: "Arik Cahya Hidayat",
      title: "IT Manager"
    },
    {
      email: "firman.syahbana@mediaselularindonesia.com",
      name: "Firman Syahbana",
      title: "COO"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    },
  ],
  HCM: [
    {
      email: "ester@completeselular.com",
      name: "Ester Septiany",
      title: "HR Manager"
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
      title: "DSM"
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
      email: "firman.syahbana@mediaselularindonesia.com",
      name: "Firman Syahbana",
      title: "COO"
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
      title: "SCM"
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
      title: "SCM"
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
      title: "AR Coordinator"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance"
    }
  ],
  Warehouse: [
    {
      email: "dian@completeselular.com",
      name: "Dian Fatmawati",
      title: "Oprasional Manager"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  Logistic: [
    {
      email: "dian@completeselular.com",
      name: "Dian Fatmawati",
      title: "Oprasional Manager"
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
      email: "firman.syahbana@mediaselularindonesia.com",
      name: "Firman Syahbana",
      title: "COO"
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
      title: "RSM"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance",
      phone: "6283875820728"
    }
  ],
  AutoEV: [
    {
      email: "william@completeselular.com",
      name: "William Surya Putra",
      title: "RSM"
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
      title: "COO"
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
      title: "Business Coordinator"
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
      title: "Manager Finance"
    }
  ],
  Testing: [
    {
      email: "kecilsabrina@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    },
    {
      email: "kecilnazira@gmail.com",
      name: "Firman Syahbana",
      title: "COO"
    }
  ],
  Pajak: [
    {
      email: "anedss.tax@gmail.com",
      name: "Anne",
      title: "Tax Leader",
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance"
    }
  ],
  Transfer: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance"
    }
  ],
  Kas: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance"
    }
  ],
  Mitra: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance"
    }
  ],
  Accounting: [
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance"
    }
  ],
  Busdev: [
    {
      email: "ester@completeselular.com",
      name: "Ester Septiany",
      title: "HR Manager"
    },
    {
      email: "accounting2@completeselular.com",
      name: "Thia Aisyah",
      title: "Manager Finance"
    }
  ]
}

function App() {
  this.form = FormApp.getActiveForm()
  this.formUrl = this.form.getPublishedUrl()
  this.url = "https://script.google.com/macros/s/AKfycbweg4HtlqY9z4tGMZMadfd-IKLdLncIH2BIkiN_cX0960HUSJe3-69nAfBoAosS9w0r/exec" // IMPORTANT - copy the web app url after deploy
  this.title = this.form.getTitle()
  this.desription = this.form.getDescription()
  this.sheetname = "Form Responses 3" // DO NOT change - the default google form responses sheet name
  this.flowHeader = "Divisi" // IMPORTANT - key field for your flows
  this.uidHeader = "_uid"
  this.uidPrefix = "CS-"
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
      .setFontColor("#FFFFFF")

    this.sheet.getRange(lastRow, startColumn, 1, newValues.length).setValues([newValues])

    this.sendNotification(taskId)
    const { task, approver, approvers } = this.getTaskById(taskId)
    this.sendApproval({ task, approver, approvers, responseId })
  }

  this.getTaskByUid = (uid) => {
    const values = this.parsedValues()
    const headers = values[0]

    const uidIndex = headers.indexOf(this.uidHeader)
    const statusIndex = headers.indexOf(this.statusHeader)
    const responseIdIndex = headers.indexOf(this.responseIdHeader)

    if (uidIndex === -1) {
      throw new Error(`Header ${this.uidHeader} tidak ditemukan`)
    }

    const rowIndex = values.findIndex((row, i) => {
      if (i === 0) return false
      return String(row[uidIndex]).trim() === String(uid).trim()
    })

    if (rowIndex === -1) {
      throw new Error(`UID ${uid} tidak ditemukan`)
    }

    const record = values[rowIndex]
    const row = rowIndex + 1

    const task = record.slice(0, statusIndex + 1).map((item, i) => {
      return {
        label: headers[i],
        value: item
      }
    })

    const status = record[statusIndex]
    const responseId = record[responseIdIndex]
    const approvers = record.filter(item => item && item.taskId)

    const pendingApprover = approvers.find(item => item.status === this.pending)

    return {
      uid,
      row,
      status,
      responseId,
      task,
      approvers,
      approver: pendingApprover
    }
  }

  this.resendPendingApprovalByUid = (uid) => {
    const { status, responseId, task, approver, approvers } = this.getTaskByUid(uid)

    if (!approver) {
      throw new Error(`UID ${uid} tidak punya approver dengan status ${this.pending}. Status dokumen sekarang: ${status}`)
    }

    if (status !== this.pending) {
      throw new Error(`UID ${uid} status dokumennya bukan ${this.pending}. Status sekarang: ${status}`)
    }

    this.sendApproval({
      task,
      approver,
      approvers,
      responseId
    })

    console.log(`Resend approval berhasil untuk UID ${uid} ke ${approver.email}`)
    return `Resend approval berhasil untuk UID ${uid} ke ${approver.email}`
  }

  this.approve = ({ taskId, comments }) => {
    const { task, approver, approvers, nextApprover, row, column, statusColumn, responseId } = this.getTaskById(taskId)
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

function resendPendingApprovalByUid(uid) {
  const app = new App()
  return app.resendPendingApprovalByUid(uid)
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

function resendPendingApproval() {
  return resendPendingApprovalByUid("CS-03945")
}