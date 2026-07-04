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
      email: "jejen@mediaselularindonesia.com",
      name: "Jejen Mutakhir",
      title: "DSM",
      phone: "62812319148"
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
      email: "jejen@mediaselularindonesia.com",
      name: "Jejen Mutakhir",
      title: "DSM",
      phone: "62812319148"
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
  this.url = "https://script.google.com/macros/s/AKfycbwKiet7gVLphsJemBkxaXx1Hkd3Td7JGPO3ywx8FTgvv8fqOnuoXUzXR7uNkKkTznMQDQ/exec" // IMPORTANT - copy the web app url after deploy
  this.title = this.form.getTitle()
  this.desription = this.form.getDescription()
  this.sheetname = 'Form Responses 1' // DO NOT change - the default google form responses sheet name
  this.flowHeader = "Divisi" // IMPORTANT - key field for your flows
  this.uidHeader = "_uid"
  this.uidPrefix = "UID-"
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

  this.getTaskValue = (task, label, fallback = "") => {
    if (!Array.isArray(task)) return fallback
    const item = task.find(entry => entry && entry.label === label)
    return item && item.value !== undefined && item.value !== null
      ? item.value
      : fallback
  }

  this.getRespondentEmailSafe = (formResponse) => {
    try {
      return String(formResponse.getRespondentEmail() || "").trim().toLowerCase()
    } catch (e) {
      return ""
    }
  }

  this.findResponseRow = (formResponse) => {
    if (!formResponse) {
      throw new Error("Form response tidak tersedia.")
    }

    const responseId = formResponse.getId()
    const targetTimestamp = formResponse.getTimestamp().getTime()
    const targetEmail = this.getRespondentEmailSafe(formResponse)
    const maxAttempts = 15

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const data = this.sheet.getDataRange().getValues()
      const headers = data[0].map(header => String(header).trim())
      const responseIdColumn = headers.indexOf(this.responseIdHeader)
      const emailColumn = headers.indexOf(this.emailHeader)
      const timestampColumn = 0

      // Idempotensi: bila response ini sudah pernah ditulis, gunakan baris yang sama.
      if (responseIdColumn >= 0) {
        for (let rowIndex = data.length - 1; rowIndex >= 1; rowIndex--) {
          if (String(data[rowIndex][responseIdColumn] || "").trim() === responseId) {
            return rowIndex + 1
          }
        }
      }

      // Cari baris berdasarkan timestamp dan email pengaju.
      for (let rowIndex = data.length - 1; rowIndex >= 1; rowIndex--) {
        const rowTimestamp = data[rowIndex][timestampColumn]
        if (!(rowTimestamp instanceof Date)) continue

        const timestampDifference = Math.abs(rowTimestamp.getTime() - targetTimestamp)
        if (timestampDifference > 5000) continue

        if (targetEmail && emailColumn >= 0) {
          const rowEmail = String(data[rowIndex][emailColumn] || "").trim().toLowerCase()
          if (rowEmail !== targetEmail) continue
        }

        // Jangan mengambil baris yang sudah terhubung ke response lain.
        if (responseIdColumn >= 0) {
          const existingResponseId = String(data[rowIndex][responseIdColumn] || "").trim()
          if (existingResponseId && existingResponseId !== responseId) continue
        }

        return rowIndex + 1
      }

      if (attempt < maxAttempts) Utilities.sleep(500)
    }

    throw new Error(
      `Baris spreadsheet untuk response ${responseId} tidak ditemukan setelah ${maxAttempts} percobaan.`
    )
  }

  this.normalizeComparableValue = (value) => {
    if (value === null || value === undefined) return ""
    if (Array.isArray(value)) {
      return value
        .map(item => this.normalizeComparableValue(item))
        .sort()
        .join("|")
    }
    if (value instanceof Date) return String(value.getTime())

    return String(value)
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase()
  }

  this.responseValuesMatchRow = (formResponse, headers, row) => {
    const itemResponses = formResponse.getItemResponses()
    let comparedFields = 0

    for (const itemResponse of itemResponses) {
      const item = itemResponse.getItem()
      if (item.getType() === FormApp.ItemType.FILE_UPLOAD) continue

      const columnIndex = headers.indexOf(String(item.getTitle()).trim())
      if (columnIndex < 0) continue

      const responseValue = itemResponse.getResponse()
      const rowValue = row[columnIndex]

      const normalizedResponse = this.normalizeComparableValue(responseValue)
      const normalizedRow = this.normalizeComparableValue(rowValue)

      // Jawaban kosong tetap ikut dibandingkan bila kolomnya ditemukan.
      comparedFields++
      if (normalizedResponse !== normalizedRow) return false
    }

    // Timestamp dan email tetap menjadi pemeriksaan utama bila tidak ada field yang bisa dibandingkan.
    return comparedFields >= 0
  }

  this.responseMatchesSheetRow = (formResponse, rowNumber, data = null, headers = null) => {
    if (!formResponse || !rowNumber) return false

    const sheetData = data || this.sheet.getDataRange().getValues()
    const sheetHeaders = headers || sheetData[0].map(header => String(header).trim())
    const row = sheetData[rowNumber - 1]
    if (!row) return false

    const rowTimestamp = row[0]
    if (!(rowTimestamp instanceof Date)) return false

    const timestampDifference = Math.abs(
      rowTimestamp.getTime() - formResponse.getTimestamp().getTime()
    )
    if (timestampDifference > 5000) return false

    const emailColumn = sheetHeaders.indexOf(this.emailHeader)
    const responseEmail = this.getRespondentEmailSafe(formResponse)
    if (responseEmail && emailColumn >= 0) {
      const rowEmail = String(row[emailColumn] || "").trim().toLowerCase()
      if (rowEmail !== responseEmail) return false
    }

    return this.responseValuesMatchRow(formResponse, sheetHeaders, row)
  }

  this.resolveResponseIdForRow = (rowNumber, repair = true) => {
    const data = this.sheet.getDataRange().getValues()
    const headers = data[0].map(header => String(header).trim())
    const responseIdColumn = headers.indexOf(this.responseIdHeader)

    if (responseIdColumn < 0) {
      throw new Error(`Kolom "${this.responseIdHeader}" tidak ditemukan.`)
    }

    const row = data[rowNumber - 1]
    if (!row) throw new Error(`Baris ${rowNumber} tidak ditemukan.`)

    const storedResponseId = String(row[responseIdColumn] || "").trim()
    const responses = this.form.getResponses()

    if (storedResponseId) {
      const storedResponse = responses.find(response => response.getId() === storedResponseId)
      if (
        storedResponse &&
        this.responseMatchesSheetRow(storedResponse, rowNumber, data, headers)
      ) {
        return storedResponseId
      }
    }

    const matchingResponse = responses
      .slice()
      .reverse()
      .find(response => this.responseMatchesSheetRow(response, rowNumber, data, headers))

    if (!matchingResponse) {
      throw new Error(
        `Response Form yang cocok untuk baris ${rowNumber} tidak ditemukan.`
      )
    }

    const correctResponseId = matchingResponse.getId()

    if (repair && correctResponseId !== storedResponseId) {
      this.sheet.getRange(rowNumber, responseIdColumn + 1).setValue(correctResponseId)
      SpreadsheetApp.flush()
      Logger.log(
        `Kolom ${this.responseIdHeader} baris ${rowNumber} diperbaiki: ` +
        `${storedResponseId || "(kosong)"} -> ${correctResponseId}`
      )
    }

    return correctResponseId
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
    if (!approver || !approver.email) {
      throw new Error("Data approver atau email approver tidak valid.")
    }

    Logger.log("Mengirim approval ke: " + approver.email)
    Logger.log("Nomor Telepon Approver: " + (approver.phone || "-"))
    Logger.log("Response ID approval: " + (responseId || "-"))

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
      htmlBody: template.evaluate().getContent()
    }

    if (attachments.length > 0) {
      options.attachments = attachments
    }

    GmailApp.sendEmail(approver.email, subject, "", options)

    // Data WhatsApp selalu diambil dari task pada baris yang sama.
    const uid = this.getTaskValue(task, "_uid", "-")
    const emailAddr = this.getTaskValue(task, "Email Address", "-")
    const name = this.getTaskValue(task, "Nama", "-")
    const division = this.getTaskValue(task, "Divisi", "-")
    const rekening = this.getTaskValue(task, "Nomer Rekening", "-")
    const rekeningOwner = this.getTaskValue(task, "Nama Pemilik Rekening", "-")
    const bank = this.getTaskValue(task, "Bank", "-")
    const transferAmount = this.getTaskValue(task, "Jumlah Transfer", "-")
    const purpose = this.getTaskValue(task, "Keperluan", "-")
    const reffnote = this.getTaskValue(task, "Reffnote", "-")
    const statusTransfer = this.getTaskValue(task, "Status Transfer", "-")
    const attacmentInvoice = this.getTaskValue(
      task,
      "Lampiran Invoice (Jika ada)",
      "Tidak ada"
    )

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
      `*Lampiran Invoice (Jika ada):* ${attacmentInvoice || "Tidak ada"}\n` +
      `*Status Transfer:* ${statusTransfer}\n\n` +
      `*Klik link berikut untuk Approve atau Reject:* \n` +
      `${this.url}?taskId=${approver.taskId}&action=approve\n\n` +
      `— *Bot by IT*`

    const phoneNumber = approver.phone
    Logger.log(`Processing approver: ${approver.name || "-"}, Phone: ${phoneNumber || "-"}`)

    if (phoneNumber) {
      Logger.log(`Sending WhatsApp to: ${phoneNumber}`)
      sendWhatsApp(phoneNumber, whatsappMessage)
    } else {
      Logger.log(`No phone number found for approver: ${approver.name || "-"}`)
    }
  }

  this.sendNotification = (taskId) => {
    const { email, responseId, status, task, approvers } = this.getTaskById(taskId)

    if (!task || !email) {
      throw new Error(`Data pengajuan untuk taskId ${taskId} tidak ditemukan atau email kosong.`)
    }

    Logger.log(
      `Mengirim notifikasi pengaju ke ${email}; taskId=${taskId}; responseId=${responseId}`
    )

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
      htmlBody: template.evaluate().getContent()
    }

    if (attachments.length > 0) {
      options.attachments = attachments
    }

    GmailApp.sendEmail(email, subject, "", options)
  }

  // Memproses persis response yang memicu trigger, bukan response/baris terakhir.
  this.onFormSubmit = (e) => {
    const lock = LockService.getScriptLock()
    lock.waitLock(30000)

    try {
      if (!e || !e.response) {
        throw new Error(
          "Event Form Submit tidak tersedia. Fungsi ini harus dijalankan oleh installable trigger Form Submit."
        )
      }

      const formResponse = e.response
      const responseId = formResponse.getId()
      const targetRow = this.findResponseRow(formResponse)

      const data = this.sheet.getDataRange().getValues()
      const displayData = this.sheet.getDataRange().getDisplayValues()
      const headers = data[0].map(header => String(header).trim())

      const uidColumn = headers.indexOf(this.uidHeader)
      const existingResponseIdColumn = headers.indexOf(this.responseIdHeader)

      // Jangan membuat UID/task ganda bila trigger terulang.
      if (uidColumn >= 0 && existingResponseIdColumn >= 0) {
        const existingUid = String(data[targetRow - 1][uidColumn] || "").trim()
        const existingResponseId = String(
          data[targetRow - 1][existingResponseIdColumn] || ""
        ).trim()

        if (existingUid && existingResponseId === responseId) {
          Logger.log(
            `Response ${responseId} sudah diproses sebagai ${existingUid}. Trigger duplikat diabaikan.`
          )
          return
        }
      }

      let startColumn = headers.indexOf(this.uidHeader) + 1
      if (startColumn === 0) startColumn = headers.length + 1

      const flowColumn = headers.indexOf(this.flowHeader)
      if (flowColumn < 0) {
        throw new Error(`Kolom flow "${this.flowHeader}" tidak ditemukan.`)
      }

      const flowKey = displayData[targetRow - 1][flowColumn]
      const selectedFlow = FLOWS[flowKey] || FLOWS.defaultFlow

      // Clone agar objek global FLOWS tidak ikut berubah antar-pengajuan.
      const flow = selectedFlow.map(item => ({ ...item }))

      const newHeaders = [
        this.uidHeader,
        this.statusHeader,
        this.responseIdHeader
      ]
      const newValues = [
        this.createUid(),
        this.pending,
        responseId
      ]

      let taskId = null

      flow.forEach((item, index) => {
        newHeaders.push(`_approver_${index + 1}`)

        item.comments = null
        item.taskId = Utilities.base64EncodeWebSafe(Utilities.getUuid())
        item.timestamp = new Date()
        item.status = index === 0 ? this.pending : this.waiting
        item.hasNext = index !== flow.length - 1

        if (index === 0) taskId = item.taskId

        newValues.push(JSON.stringify(item))
      })

      this.sheet
        .getRange(1, startColumn, 1, newHeaders.length)
        .setValues([newHeaders])
        .setBackgroundColor("#34A853")
        .setFontColor("#000000")

      // Kunci utama perbaikan: tulis ke targetRow milik e.response.
      this.sheet
        .getRange(targetRow, startColumn, 1, newValues.length)
        .setValues([newValues])

      SpreadsheetApp.flush()

      Logger.log(
        `Pengajuan diproses: row=${targetRow}, responseId=${responseId}, ` +
        `uid=${newValues[0]}, flow=${flowKey}`
      )

      // Notifikasi pengaju dan approver memakai task serta responseId yang sama.
      this.sendNotification(taskId)

      const { task, approver, approvers } = this.getTaskById(taskId)
      this.sendApproval({
        task,
        approver,
        approvers,
        responseId
      })
    } finally {
      lock.releaseLock()
    }
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

function _onFormSubmit(e) {
  const app = new App()
  app.onFormSubmit(e)
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
  // GANTI UID INI sebelum menjalankan fungsi.
  const targetUid = "UID-10844"

  const app = new App()
  const sheet = app.sheet
  const data = sheet.getDataRange().getValues()
  const headers = data[0].map(header => String(header).trim())
  const col = headerName => headers.indexOf(headerName)

  const uidColumn = col(app.uidHeader)
  if (uidColumn < 0) {
    throw new Error(`Kolom "${app.uidHeader}" tidak ditemukan.`)
  }

  let targetRowNumber = 0

  for (let rowIndex = 1; rowIndex < data.length; rowIndex++) {
    if (String(data[rowIndex][uidColumn] || "").trim() === targetUid) {
      targetRowNumber = rowIndex + 1
      break
    }
  }

  if (!targetRowNumber) {
    Logger.log(`Task dengan UID ${targetUid} tidak ditemukan.`)
    return
  }

  Logger.log(`Task dengan UID ${targetUid} ditemukan di baris ${targetRowNumber}.`)

  // Validasi dan perbaiki _response_id bila data lama pernah tertukar.
  const responseId = app.resolveResponseIdForRow(targetRowNumber, true)
  Logger.log(`Response ID yang dipakai untuk ${targetUid}: ${responseId}`)

  // Baca ulang setelah kemungkinan perbaikan _response_id.
  const refreshedData = sheet.getDataRange().getValues()
  const targetRow = refreshedData[targetRowNumber - 1]

  let pendingTaskId = null
  let pendingApproverKey = null

  for (let approverIndex = 1; ; approverIndex++) {
    const approverKey = `_approver_${approverIndex}`
    const approverColumn = col(approverKey)

    if (approverColumn < 0) break

    const cell = targetRow[approverColumn]
    if (!cell) continue

    let approverData
    try {
      approverData = typeof cell === "string" ? JSON.parse(cell) : cell
    } catch (e) {
      Logger.log(
        `Gagal parse JSON ${approverKey} untuk UID ${targetUid}: ${e.message}`
      )
      continue
    }

    if (approverData && approverData.status === app.pending) {
      pendingTaskId = approverData.taskId
      pendingApproverKey = approverKey
      break
    }
  }

  if (!pendingTaskId) {
    Logger.log(
      `Tidak ada approver berstatus "${app.pending}" untuk UID ${targetUid}.`
    )
    return
  }

  const {
    task,
    approver,
    approvers,
    email,
    status
  } = app.getTaskById(pendingTaskId)

  if (!task || !approver || !approver.email) {
    throw new Error(
      `Data approver pending tidak valid untuk UID ${targetUid}, kolom ${pendingApproverKey}.`
    )
  }

  // Kirim ulang email approver menggunakan body dan attachment dari response yang sama.
  const approvalTemplate = HtmlService.createTemplateFromFile("approval_email.html")
  approvalTemplate.title = app.title
  approvalTemplate.task = task
  approvalTemplate.approver = approver
  approvalTemplate.approvers = approvers
  approvalTemplate.actionUrl = `${app.url}?taskId=${approver.taskId}`
  approvalTemplate.formUrl = app.formUrl

  approvalTemplate.approved = app.approved
  approvalTemplate.rejected = app.rejected
  approvalTemplate.pending = app.pending
  approvalTemplate.waiting = app.waiting

  const attachments = app.getAttachmentsByResponseId(responseId)
  const approvalOptions = {
    htmlBody: approvalTemplate.evaluate().getContent()
  }

  if (attachments.length > 0) {
    approvalOptions.attachments = attachments
  }

  GmailApp.sendEmail(
    approver.email,
    "Approval Required - " + app.title,
    "",
    approvalOptions
  )

  Logger.log(
    `Resend email APPROVER berhasil: ${approver.email}; ` +
    `UID=${targetUid}; responseId=${responseId}`
  )

  // Kirim ulang email pengaju menggunakan task dan responseId yang sama.
  if (email) {
    const notificationTemplate = HtmlService.createTemplateFromFile(
      "notification_email.html"
    )
    notificationTemplate.title = app.title
    notificationTemplate.task = task
    notificationTemplate.status = status
    notificationTemplate.approvers = approvers
    notificationTemplate.formUrl = app.formUrl
    notificationTemplate.approvalProgressUrl = `${app.url}?responseId=${responseId}`

    notificationTemplate.approved = app.approved
    notificationTemplate.rejected = app.rejected
    notificationTemplate.pending = app.pending
    notificationTemplate.waiting = app.waiting

    const notificationOptions = {
      htmlBody: notificationTemplate.evaluate().getContent()
    }

    if (attachments.length > 0) {
      notificationOptions.attachments = attachments
    }

    GmailApp.sendEmail(
      email,
      `Approval ${status} - ${app.title}`,
      "",
      notificationOptions
    )

    Logger.log(
      `Resend email PENGAJU berhasil: ${email}; ` +
      `UID=${targetUid}; responseId=${responseId}`
    )
  } else {
    Logger.log(`Email pengaju kosong untuk UID ${targetUid}.`)
  }
}