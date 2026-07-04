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
    return values.map(value => {
      return value.map(cell => {
        try {
          return JSON.parse(cell)
        } catch (e) {
          return cell
        }
      })
    })
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

  /*
   * Batas attachment Gmail via Apps Script (lebih ketat dari limit Gmail 25 MB).
   * File/total di atas batas ini TIDAK di-load sebagai blob — hanya link Drive.
   */
  this.emailAttachmentMaxFileBytes = 5 * 1024 * 1024
  this.emailAttachmentMaxTotalBytes = 8 * 1024 * 1024

  this.getFileUploadTitles = () => {
    if (this._fileUploadTitles) return this._fileUploadTitles

    try {
      this._fileUploadTitles = this.form
        .getItems(FormApp.ItemType.FILE_UPLOAD)
        .map(item => item.getTitle())
    } catch (error) {
      console.error(`Gagal membaca judul FILE_UPLOAD dari Form: ${error.message}`)
      this._fileUploadTitles = []
    }

    return this._fileUploadTitles
  }

  this.extractDriveFileIds = value => {
    if (value == null || value === "") return []

    const text = Array.isArray(value) ? value.join("\n") : String(value)
    const ids = []
    const seen = {}

    const add = id => {
      id = String(id || "").trim()
      if (!id || seen[id]) return
      seen[id] = true
      ids.push(id)
    }

    let match
    const queryIdPattern = /[?&]id=([A-Za-z0-9_-]{20,})/g
    while ((match = queryIdPattern.exec(text)) !== null) add(match[1])

    const pathIdPattern = /\/d\/([A-Za-z0-9_-]{20,})/g
    while ((match = pathIdPattern.exec(text)) !== null) add(match[1])

    String(text)
      .split(/[\s,;]+/)
      .map(part => part.trim())
      .filter(Boolean)
      .forEach(part => {
        if (/^[A-Za-z0-9_-]{20,}$/.test(part)) add(part)
      })

    return ids
  }

  this.getAttachmentEntriesFromTask = task => {
    if (!Array.isArray(task) || !task.length) return []

    const uploadTitles = this.getFileUploadTitles()
    const uploadTitleSet = {}
    uploadTitles.forEach(title => {
      uploadTitleSet[String(title)] = true
    })

    const fileIds = []
    const seenIds = {}

    task.forEach(field => {
      if (!field || !uploadTitleSet[String(field.label)]) return

      this.extractDriveFileIds(field.value).forEach(fileId => {
        if (seenIds[fileId]) return
        seenIds[fileId] = true
        fileIds.push(fileId)
      })
    })

    if (!fileIds.length) {
      task.forEach(field => {
        if (!field) return

        const label = String(field.label || "")
        const value = String(field.value || "")
        const looksLikeAttachmentField =
          /lampiran|attachment|upload|unggah|invoice|rekening/i.test(label)
        const containsDriveReference =
          /drive\.google\.com|docs\.google\.com/i.test(value)

        if (!looksLikeAttachmentField || !containsDriveReference) return

        this.extractDriveFileIds(value).forEach(fileId => {
          if (seenIds[fileId]) return
          seenIds[fileId] = true
          fileIds.push(fileId)
        })
      })
    }

    const entries = []

    fileIds.forEach(fileId => {
      try {
        const file = DriveApp.getFileById(fileId)

        entries.push({
          id: fileId,
          name: file.getName(),
          size: file.getSize(),
          url: file.getUrl(),
          source: "sheet_row"
        })
      } catch (error) {
        console.error(`Gagal membaca metadata file ${fileId}: ${error.message}`)
      }
    })

    return entries
  }

  this.loadAttachmentBlob = entry => {
    if (!entry || entry.blob) return entry.blob

    try {
      const file = DriveApp.getFileById(entry.id)
      entry.blob = file.getBlob().setName(file.getName())
      return entry.blob
    } catch (error) {
      console.error(`Gagal load blob ${entry.id}: ${error.message}`)
      return null
    }
  }

  this.prepareEmailAttachmentsFromEntries = entries => {
    entries = Array.isArray(entries) ? entries : []

    const attachments = []
    const linkedFiles = []
    let attachedBytes = 0
    let totalBytes = 0

    entries.forEach(entry => {
      totalBytes += entry.size || 0

      const withinFileLimit = entry.size <= this.emailAttachmentMaxFileBytes
      const withinTotalLimit =
        attachedBytes + entry.size <= this.emailAttachmentMaxTotalBytes
      const canAttach = withinFileLimit && withinTotalLimit

      if (canAttach) {
        const blob = this.loadAttachmentBlob(entry)
        if (blob) {
          attachments.push(blob)
          attachedBytes += entry.size
          return
        }
      }

      linkedFiles.push(entry)
    })

    return {
      attachments,
      linkedFiles,
      allFiles: entries,
      attachedBytes,
      totalBytes,
      totalFiles: entries.length,
      attachmentSource: "sheet_row_file_upload_columns",
      usedLinkFallback: linkedFiles.length > 0
    }
  }

  this.prepareEmailAttachmentsFromTask = task => {
    return this.prepareEmailAttachmentsFromEntries(
      this.getAttachmentEntriesFromTask(task)
    )
  }

  this.getAttachmentEntriesByResponseId = responseId => {
    if (!responseId) return []

    try {
      const response = this.form
        .getResponses()
        .find(item => item.getId() === responseId)

      if (!response) return []

      const entries = []

      response.getItemResponses().forEach(itemResponse => {
        const item = itemResponse.getItem()
        if (item.getType() !== FormApp.ItemType.FILE_UPLOAD) return

        const fileIds = itemResponse.getResponse()
        const ids = Array.isArray(fileIds) ? fileIds : (fileIds ? [fileIds] : [])

        ids.forEach(fileId => {
          try {
            const file = DriveApp.getFileById(fileId)
            entries.push({
              id: fileId,
              name: file.getName(),
              size: file.getSize(),
              url: file.getUrl(),
              blob: file.getBlob().setName(file.getName()),
              source: "form_response_audit_only"
            })
          } catch (error) {
            console.error(`Failed to read uploaded file ${fileId}: ${error.message}`)
          }
        })
      })

      return entries
    } catch (error) {
      console.error(`Failed to get attachments for response ${responseId}: ${error.message}`)
      return []
    }
  }

  this.buildLargeAttachmentNoticeHtml = payload => {
    if (!payload || !payload.linkedFiles || !payload.linkedFiles.length) {
      return ""
    }

    const escapeHtml = value => String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")

    const formatBytes = bytes => {
      if (!bytes) return "0 B"
      return (bytes / 1024 / 1024).toFixed(2) + " MB"
    }

    const fileItems = payload.linkedFiles.map(file => {
      return `
      <li style="margin:0 0 4px;padding:0;list-style:none">
        <a href="${escapeHtml(file.url)}" target="_blank" rel="noopener noreferrer" style="color:#44403c;text-decoration:underline">
          ${escapeHtml(file.name)}
        </a>
        <span style="color:#a8a29e;font-size:12px"> · ${formatBytes(file.size)}</span>
      </li>`
    }).join("")

    return `
    <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e7e5e4;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#44403c">
      <p style="margin:0 0 10px;font-size:13px;color:#78716c">Lampiran tersedia di Google Drive (ukuran melebihi batas email):</p>
      <ul style="margin:0;padding:0">${fileItems}</ul>
    </div>`
  }

  this.sendEmailLinksOnly = (recipient, subject, baseHtmlBody, attachmentPayload) => {
    const linksOnlyPayload = Object.assign({}, attachmentPayload, {
      attachments: [],
      linkedFiles: attachmentPayload.allFiles
    })

    GmailApp.sendEmail(recipient, subject, "", {
      htmlBody: baseHtmlBody + this.buildLargeAttachmentNoticeHtml(linksOnlyPayload)
    })

    return {
      attachedFiles: 0,
      linkedFiles: linksOnlyPayload.linkedFiles.length,
      totalFiles: attachmentPayload.totalFiles,
      totalBytes: attachmentPayload.totalBytes,
      fileNames: attachmentPayload.allFiles.map(file => file.name),
      fileIds: attachmentPayload.allFiles.map(file => file.id),
      attachmentSource: attachmentPayload.attachmentSource,
      fallbackToLinks: true
    }
  }

  this.sendEmailWithAttachmentFallback = ({
    recipient,
    subject,
    baseHtmlBody,
    attachmentPayload
  }) => {
    const hasInlineAttachments = attachmentPayload.attachments.length > 0

    if (!hasInlineAttachments) {
      GmailApp.sendEmail(recipient, subject, "", {
        htmlBody: baseHtmlBody + this.buildLargeAttachmentNoticeHtml(attachmentPayload)
      })

      return {
        attachedFiles: 0,
        linkedFiles: attachmentPayload.linkedFiles.length,
        totalFiles: attachmentPayload.totalFiles,
        totalBytes: attachmentPayload.totalBytes,
        fileNames: attachmentPayload.allFiles.map(file => file.name),
        fileIds: attachmentPayload.allFiles.map(file => file.id),
        attachmentSource: attachmentPayload.attachmentSource,
        fallbackToLinks: attachmentPayload.usedLinkFallback
      }
    }

    try {
      GmailApp.sendEmail(recipient, subject, "", {
        htmlBody: baseHtmlBody + this.buildLargeAttachmentNoticeHtml(attachmentPayload),
        attachments: attachmentPayload.attachments
      })

      return {
        attachedFiles: attachmentPayload.attachments.length,
        linkedFiles: attachmentPayload.linkedFiles.length,
        totalFiles: attachmentPayload.totalFiles,
        totalBytes: attachmentPayload.totalBytes,
        fileNames: attachmentPayload.allFiles.map(file => file.name),
        fileIds: attachmentPayload.allFiles.map(file => file.id),
        attachmentSource: attachmentPayload.attachmentSource,
        fallbackToLinks: false
      }
    } catch (error) {
      const message = error && error.message ? error.message : String(error)

      Logger.log(
        `Kirim email dengan attachment gagal ke ${recipient}: ${message}. ` +
        "Mencoba ulang hanya dengan link Drive."
      )

      try {
        return this.sendEmailLinksOnly(recipient, subject, baseHtmlBody, attachmentPayload)
      } catch (retryError) {
        const retryMessage =
          retryError && retryError.message ? retryError.message : String(retryError)

        Logger.log(
          `Kirim email link-only juga gagal ke ${recipient}: ${retryMessage}. ` +
          "Mencoba kirim tanpa info lampiran."
        )

        GmailApp.sendEmail(recipient, subject, "", { htmlBody: baseHtmlBody })

        return {
          attachedFiles: 0,
          linkedFiles: 0,
          totalFiles: attachmentPayload.totalFiles,
          totalBytes: attachmentPayload.totalBytes,
          fileNames: attachmentPayload.allFiles.map(file => file.name),
          fileIds: attachmentPayload.allFiles.map(file => file.id),
          attachmentSource: attachmentPayload.attachmentSource,
          fallbackToLinks: true,
          emailSentWithoutAttachmentInfo: true
        }
      }
    }
  }

  this.sendApprovalEmail = ({ task, approver, approvers }) => {
    if (!approver || !approver.email) {
      throw new Error("Data approver atau email approver tidak valid.")
    }

    Logger.log("Mengirim approval email ke: " + approver.email)

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
    const attachmentPayload = this.prepareEmailAttachmentsFromTask(task)

    return this.sendEmailWithAttachmentFallback({
      recipient: approver.email,
      subject: subject,
      baseHtmlBody: template.evaluate().getContent(),
      attachmentPayload: attachmentPayload
    })
  }

  this.buildWhatsAppMessage = (task, approver) => {
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
    const attacmentInvoice = this.getTaskValue(task, "Lampiran Invoice (Jika ada)", "Tidak ada")

    return (
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
      `*Klik link berikut untuk Approve atau Reject:*\n` +
      `${this.url}?taskId=${approver.taskId}&action=approve\n\n` +
      `— *Bot by IT*`
    )
  }

  this.sendWhatsAppToApprover = (task, approver) => {
    if (!approver) {
      return { ok: false, skipped: true, reason: "approver_missing" }
    }

    const phone = normalizePhoneForWhatsApp(approver.phone)
    if (!phone) {
      Logger.log(
        `[WhatsApp SKIP] Nomor tidak valid untuk approver: ${approver.name || "-"} ` +
        `(phone=${approver.phone || "-"})`
      )
      return { ok: false, skipped: true, reason: "invalid_phone" }
    }

    const message = this.buildWhatsAppMessage(task, approver)
    return sendWhatsApp(phone, message)
  }

  this.sendApproval = ({ task, approver, approvers }) => {
    const emailResult = this.sendApprovalEmail({ task, approver, approvers })
    const whatsappResult = this.sendWhatsAppToApprover(task, approver)
    return { email: emailResult, whatsapp: whatsappResult }
  }

  this.sendNotification = taskId => {
    const { email, responseId, status, task, approvers } = this.getTaskById(taskId)

    if (!email) {
      throw new Error("Email pengaju tidak ditemukan untuk taskId: " + taskId)
    }

    Logger.log(`Mengirim notifikasi pengaju ke ${email}; taskId=${taskId}; responseId=${responseId}`)

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
    const attachmentPayload = this.prepareEmailAttachmentsFromTask(task)

    return this.sendEmailWithAttachmentFallback({
      recipient: email,
      subject: subject,
      baseHtmlBody: template.evaluate().getContent(),
      attachmentPayload: attachmentPayload
    })
  }

  /*
   * Satu pintu kirim email — trigger, approve, reject, dan resend
   * memakai fungsi dispatch yang sama agar format & urutan konsisten.
   */
  this.safeEmailDispatch = (label, fn) => {
    try {
      const result = fn()
      Logger.log(`[EMAIL OK] ${label}`)
      return { ok: true, label: label, result: result }
    } catch (error) {
      const message = error && error.message ? error.message : String(error)
      Logger.log(`[EMAIL FAIL] ${label}: ${message}`)
      return { ok: false, label: label, error: message }
    }
  }

  this.safeWhatsAppDispatch = (label, fn) => {
    try {
      const result = fn()
      if (result && result.skipped) {
        Logger.log(`[WA SKIP] ${label}: ${result.reason || "skipped"}`)
        return { ok: false, label: label, skipped: true, reason: result.reason }
      }
      if (result && result.ok === false) {
        Logger.log(`[WA FAIL] ${label}: ${result.error || "unknown"}`)
        return { ok: false, label: label, error: result.error || "unknown" }
      }
      Logger.log(`[WA OK] ${label}`)
      return { ok: true, label: label, result: result }
    } catch (error) {
      const message = error && error.message ? error.message : String(error)
      Logger.log(`[WA FAIL] ${label}: ${message}`)
      return { ok: false, label: label, error: message }
    }
  }

  this.buildEmailDispatchSummary = (uid, phase, results) => {
    const summary = {
      uid: uid,
      phase: phase,
      sent: results.filter(item => item.ok).map(item => item.label),
      skipped: results.filter(item => item.skipped).map(item => ({
        step: item.label,
        reason: item.reason
      })),
      failed: results.filter(item => !item.ok && !item.skipped).map(item => ({
        step: item.label,
        error: item.error
      }))
    }

    Logger.log(JSON.stringify(summary, null, 2))
    return summary
  }

  this.dispatchApproverNotifications = ({ task, approver, approvers, phaseLabel }) => {
    const approverLabel = approver.name || approver.email || "-"

    return [
      this.safeEmailDispatch(
        `Approval email ke ${approver.email} (${phaseLabel})`,
        () => this.sendApprovalEmail({ task, approver, approvers })
      ),
      this.safeWhatsAppDispatch(
        `WhatsApp ke ${approverLabel} (${phaseLabel})`,
        () => this.sendWhatsAppToApprover(task, approver)
      )
    ]
  }

  // Trigger awal: notifikasi pengaju + approval ke approver pending pertama.
  this.dispatchEmailsAfterSubmit = taskId => {
    const { task, approver, approvers } = this.getTaskById(taskId)

    if (!approver || !approver.email) {
      throw new Error(`Tidak ada approver pending untuk taskId ${taskId}`)
    }

    const results = [
      this.safeEmailDispatch(
        `Notifikasi pengaju (submit) taskId=${taskId}`,
        () => this.sendNotification(taskId)
      )
    ].concat(
      this.dispatchApproverNotifications({
        task,
        approver,
        approvers,
        phaseLabel: "submit"
      })
    )

    return this.buildEmailDispatchSummary(null, "after_submit", results)
  }

  // Setelah approve lanjut: update pengaju + approval ke approver berikutnya.
  this.dispatchEmailsAfterApproveAdvance = ({
    taskId,
    task,
    nextApprover,
    approvers
  }) => {
    if (!nextApprover || !nextApprover.email) {
      throw new Error(`Approver berikutnya tidak valid untuk taskId ${taskId}`)
    }

    const results = [
      this.safeEmailDispatch(
        `Notifikasi pengaju (progress) taskId=${taskId}`,
        () => this.sendNotification(taskId)
      )
    ].concat(
      this.dispatchApproverNotifications({
        task,
        approver: nextApprover,
        approvers,
        phaseLabel: "level berikutnya"
      })
    )

    return this.buildEmailDispatchSummary(null, "after_approve_advance", results)
  }

  // Setelah approve final / reject: hanya update pengaju.
  this.dispatchEmailsAfterComplete = (taskId, phase) => {
    const results = [
      this.safeEmailDispatch(
        `Notifikasi pengaju (${phase}) taskId=${taskId}`,
        () => this.sendNotification(taskId)
      )
    ]

    return this.buildEmailDispatchSummary(null, phase, results)
  }

  this.resolveTaskIdForUid = uidData => {
    if (uidData.approver && uidData.approver.taskId) {
      return uidData.approver.taskId
    }

    if (uidData.approvers && uidData.approvers.length) {
      const pending = uidData.approvers.find(item => item.status === this.pending)
      if (pending && pending.taskId) return pending.taskId

      const last = uidData.approvers[uidData.approvers.length - 1]
      if (last && last.taskId) return last.taskId
    }

    throw new Error(`TaskId tidak ditemukan untuk UID ${uidData.uid}`)
  }

  /*
   * Resend konsisten dengan fase dokumen saat ini:
   * - Pending  → sama seperti trigger (pengaju + approver pending)
   * - Approved/Rejected → sama seperti approve final/reject (pengaju saja)
   */
  this.resendEmailsByUid = uid => {
    const uidData = this.getTaskByUid(uid)
    const { status } = uidData

    if (status === this.pending) {
      const taskId = this.resolveTaskIdForUid(uidData)
      const summary = this.dispatchEmailsAfterSubmit(taskId)
      summary.uid = uid
      summary.phase = "resend_pending"
      Logger.log(JSON.stringify(summary, null, 2))
      return summary
    }

    if (status === this.approved || status === this.rejected) {
      const taskId = this.resolveTaskIdForUid(uidData)
      const phase = status === this.approved ? "resend_approved" : "resend_rejected"
      const summary = this.dispatchEmailsAfterComplete(taskId, phase)
      summary.uid = uid
      Logger.log(JSON.stringify(summary, null, 2))
      return summary
    }

    throw new Error(
      `UID ${uid} tidak bisa di-resend. Status tidak dikenal: ${status}`
    )
  }

  this.resendPendingApprovalByUid = uid => {
    return this.resendEmailsByUid(uid)
  }

  this.normalizeResponseMatchValue = value => {
    if (value == null) return ""

    if (Array.isArray(value)) {
      return value
        .map(item => this.normalizeResponseMatchValue(item))
        .join(", ")
    }

    return String(value)
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase()
  }

  this.findSheetRowForResponse = response => {
    if (!response) {
      throw new Error("Event Form tidak memiliki e.response.")
    }

    const responseTimestamp = response.getTimestamp().getTime()
    const respondentEmail = this.normalizeResponseMatchValue(
      response.getRespondentEmail ? response.getRespondentEmail() : ""
    )

    const responseItems = response.getItemResponses()
      .filter(itemResponse => itemResponse.getItem().getType() !== FormApp.ItemType.FILE_UPLOAD)
      .map(itemResponse => ({
        title: itemResponse.getItem().getTitle(),
        value: this.normalizeResponseMatchValue(itemResponse.getResponse())
      }))

    for (let attempt = 0; attempt < 10; attempt++) {
      SpreadsheetApp.flush()

      const range = this.sheet.getDataRange()
      const rawValues = range.getValues()
      const displayValues = range.getDisplayValues()
      const headers = displayValues[0]

      const timestampColumn = headers.indexOf("Timestamp")
      const emailColumn = headers.indexOf(this.emailHeader)

      if (timestampColumn === -1) {
        throw new Error('Kolom "Timestamp" tidak ditemukan.')
      }

      let bestRow = 0
      let bestScore = -1

      for (let rowIndex = 1; rowIndex < rawValues.length; rowIndex++) {
        const rawTimestamp = rawValues[rowIndex][timestampColumn]
        const rowTimestamp = rawTimestamp instanceof Date
          ? rawTimestamp.getTime()
          : new Date(rawTimestamp).getTime()

        if (!Number.isFinite(rowTimestamp)) continue
        if (Math.abs(rowTimestamp - responseTimestamp) > 2000) continue

        if (respondentEmail && emailColumn >= 0) {
          const rowEmail = this.normalizeResponseMatchValue(displayValues[rowIndex][emailColumn])
          if (rowEmail !== respondentEmail) continue
        }

        let score = 0

        responseItems.forEach(responseItem => {
          const columnIndex = headers.indexOf(responseItem.title)
          if (columnIndex === -1) return

          const rowValue = this.normalizeResponseMatchValue(displayValues[rowIndex][columnIndex])
          if (rowValue === responseItem.value) score++
        })

        if (score > bestScore) {
          bestScore = score
          bestRow = rowIndex + 1
        }
      }

      if (bestRow) return bestRow
      Utilities.sleep(500)
    }

    throw new Error(
      "Baris Spreadsheet untuk Form Response " + response.getId() + " tidak ditemukan."
    )
  }

  this.onFormSubmit = e => {
    if (!e || !e.response) {
      throw new Error(
        "_onFormSubmit harus dijalankan oleh installable Form submit trigger, " +
        "bukan dijalankan manual dari editor."
      )
    }

    const submittedResponse = e.response
    const responseId = submittedResponse.getId()
    const lock = LockService.getDocumentLock()
    let taskId

    lock.waitLock(30000)

    try {
      const submittedRow = this.findSheetRowForResponse(submittedResponse)
      const data = this.sheet.getDataRange().getValues()
      const values = this.parsedValues()
      const headers = values[0]

      const uidColumn = headers.indexOf(this.uidHeader)
      const existingResponseIdColumn = headers.indexOf(this.responseIdHeader)

      if (uidColumn >= 0 && existingResponseIdColumn >= 0) {
        const existingUid = String(data[submittedRow - 1][uidColumn] || "").trim()
        const existingResponseId = String(data[submittedRow - 1][existingResponseIdColumn] || "").trim()

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
      if (flowColumn === -1) {
        throw new Error('Kolom flow "' + this.flowHeader + '" tidak ditemukan.')
      }

      const flowKey = values[submittedRow - 1][flowColumn]
      const flow = (FLOWS[flowKey] || FLOWS.defaultFlow).map(item => Object.assign({}, item))

      const newHeaders = [this.uidHeader, this.statusHeader, this.responseIdHeader]
      const newValues = [this.createUid(), this.pending, responseId]

      flow.forEach((item, i) => {
        newHeaders.push("_approver_" + (i + 1))

        item.comments = null
        item.taskId = Utilities.base64EncodeWebSafe(Utilities.getUuid())
        item.timestamp = new Date()
        item.status = i === 0 ? this.pending : this.waiting
        item.hasNext = i !== flow.length - 1

        if (i === 0) taskId = item.taskId

        newValues.push(JSON.stringify(item))
      })

      this.sheet.getRange(1, startColumn, 1, newHeaders.length)
        .setValues([newHeaders])
        .setBackgroundColor("#34A853")
        .setFontColor("#FFFFFF")

      this.sheet
        .getRange(submittedRow, startColumn, 1, newValues.length)
        .setValues([newValues])

      SpreadsheetApp.flush()

      Logger.log(
        `Pengajuan diproses: row=${submittedRow}, responseId=${responseId}, uid=${newValues[0]}, flow=${flowKey}`
      )
    } finally {
      lock.releaseLock()
    }

    this.dispatchEmailsAfterSubmit(taskId)
  }

  this.getTaskByUid = uid => {
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

    const task = record.slice(0, statusIndex + 1).map((item, i) => ({
      label: headers[i],
      value: item
    }))

    const status = record[statusIndex]
    const responseId = record[responseIdIndex]
    const approvers = record.filter(item => item && item.taskId)
    const approver = approvers.find(item => item.status === this.pending)

    return { uid, row, status, responseId, task, approvers, approver }
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
      this.dispatchEmailsAfterApproveAdvance({
        taskId,
        task,
        nextApprover,
        approvers
      })
    } else {
      this.sheet.getRange(row, statusColumn).setValue(this.approved)
      this.dispatchEmailsAfterComplete(taskId, "after_approve_final")
    }
  }

  this.reject = ({ taskId, comments }) => {
    const { approver, row, column, statusColumn } = this.getTaskById(taskId)
    if (!approver) return
    approver.comments = comments
    approver.status = this.rejected
    approver.timestamp = new Date()
    this.sheet.getRange(row, column).setValue(JSON.stringify(approver))
    this.sheet.getRange(row, statusColumn).setValue(this.rejected)
    this.dispatchEmailsAfterComplete(taskId, "after_reject")
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

function resendEmailsByUid(uid) {
  const app = new App()
  return app.resendEmailsByUid(uid)
}

function resendPendingApprovalByUid(uid) {
  return resendEmailsByUid(uid)
}

function resendBulkUID() {
  const uids = [
    "UID1",
    "UID2"
  ]

  return uids.map(uid => {
    try {
      return {
        uid,
        ok: true,
        result: resendEmailsByUid(uid)
      }
    } catch (error) {
      return {
        uid,
        ok: false,
        error: error.message || String(error)
      }
    }
  })
}

function repairResponseIdByUid(uid) {
  if (!uid) throw new Error("UID wajib diisi.")

  const app = new App()
  const range = app.sheet.getDataRange()
  const rawValues = range.getValues()
  const displayValues = range.getDisplayValues()
  const headers = displayValues[0]

  const uidColumn = headers.indexOf(app.uidHeader)
  const responseIdColumn = headers.indexOf(app.responseIdHeader)
  const timestampColumn = headers.indexOf("Timestamp")
  const emailColumn = headers.indexOf(app.emailHeader)

  if (uidColumn === -1) throw new Error('Kolom "' + app.uidHeader + '" tidak ditemukan.')
  if (responseIdColumn === -1) throw new Error('Kolom "' + app.responseIdHeader + '" tidak ditemukan.')
  if (timestampColumn === -1) throw new Error('Kolom "Timestamp" tidak ditemukan.')

  const rowIndex = displayValues.findIndex((row, index) => {
    return index > 0 && String(row[uidColumn]).trim() === String(uid).trim()
  })

  if (rowIndex === -1) throw new Error("UID tidak ditemukan: " + uid)

  const rawTimestamp = rawValues[rowIndex][timestampColumn]
  const targetTimestamp = rawTimestamp instanceof Date
    ? rawTimestamp.getTime()
    : new Date(rawTimestamp).getTime()

  if (!Number.isFinite(targetTimestamp)) {
    throw new Error("Timestamp baris tidak valid untuk UID: " + uid)
  }

  const targetEmail = emailColumn >= 0
    ? app.normalizeResponseMatchValue(displayValues[rowIndex][emailColumn])
    : ""

  let bestResponse = null
  let bestScore = -1

  app.form.getResponses().forEach(response => {
    const responseTimestamp = response.getTimestamp().getTime()
    if (Math.abs(responseTimestamp - targetTimestamp) > 2000) return

    const responseEmail = app.normalizeResponseMatchValue(
      response.getRespondentEmail ? response.getRespondentEmail() : ""
    )

    if (targetEmail && responseEmail && targetEmail !== responseEmail) return

    let score = 0

    response.getItemResponses().forEach(itemResponse => {
      const item = itemResponse.getItem()
      if (item.getType() === FormApp.ItemType.FILE_UPLOAD) return

      const columnIndex = headers.indexOf(item.getTitle())
      if (columnIndex === -1) return

      const rowValue = app.normalizeResponseMatchValue(displayValues[rowIndex][columnIndex])
      const responseValue = app.normalizeResponseMatchValue(itemResponse.getResponse())

      if (rowValue === responseValue) score++
    })

    if (score > bestScore) {
      bestScore = score
      bestResponse = response
    }
  })

  if (!bestResponse) {
    throw new Error("Form Response yang cocok tidak ditemukan untuk UID: " + uid)
  }

  const oldResponseId = displayValues[rowIndex][responseIdColumn]
  const newResponseId = bestResponse.getId()

  app.sheet.getRange(rowIndex + 1, responseIdColumn + 1).setValue(newResponseId)
  SpreadsheetApp.flush()

  const result = {
    uid: uid,
    sheetRow: rowIndex + 1,
    oldResponseId: oldResponseId,
    newResponseId: newResponseId,
    matchedFields: bestScore
  }

  Logger.log(JSON.stringify(result, null, 2))
  return result
}

function auditAttachmentByUid(uid) {
  if (!uid) throw new Error("UID wajib diisi.")

  const app = new App()
  const values = app.parsedValues()
  const headers = values[0]
  const uidColumn = headers.indexOf(app.uidHeader)
  const statusColumn = headers.indexOf(app.statusHeader)

  if (uidColumn === -1) throw new Error('Kolom "_uid" tidak ditemukan.')
  if (statusColumn === -1) throw new Error('Kolom "_status" tidak ditemukan.')

  const rowIndex = values.findIndex((row, index) => {
    return index > 0 && String(row[uidColumn]).trim() === String(uid).trim()
  })

  if (rowIndex === -1) throw new Error("UID tidak ditemukan: " + uid)

  const row = values[rowIndex]
  const task = row.slice(0, statusColumn + 1).map((value, index) => ({
    label: headers[index],
    value: value
  }))

  const result = {
    uid: uid,
    sheetRow: rowIndex + 1,
    fileUploadFields: task.filter(field => app.getFileUploadTitles().indexOf(field.label) !== -1),
    filesThatWillBeSent: app.getAttachmentEntriesFromTask(task).map(file => ({
      id: file.id,
      name: file.name,
      size: file.size,
      url: file.url,
      source: file.source
    }))
  }

  Logger.log(JSON.stringify(result, null, 2))
  return result
}

function reinstallFormSubmitTrigger() {
  const handlerName = "_onFormSubmit"

  ScriptApp.getProjectTriggers().forEach(trigger => {
    const isFormSubmit = trigger.getEventType() === ScriptApp.EventType.ON_FORM_SUBMIT
    if (isFormSubmit || trigger.getHandlerFunction() === handlerName) {
      ScriptApp.deleteTrigger(trigger)
    }
  })

  const trigger = ScriptApp
    .newTrigger(handlerName)
    .forForm(FormApp.getActiveForm())
    .onFormSubmit()
    .create()

  Logger.log(
    "Trigger aktif: handler=%s, event=%s, source=%s",
    trigger.getHandlerFunction(),
    trigger.getEventType(),
    trigger.getTriggerSource()
  )

  return trigger.getUniqueId()
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

/*
 * WhatsApp routing (otomatis):
 *   - Hanya WAHA terisi     → pakai WAHA saja
 *   - Hanya Fonnte terisi   → pakai Fonnte saja
 *   - Keduanya terisi       → WAHA primary, Fonnte backup
 *
 * WHATSAPP_PROVIDER (opsional):
 *   "auto"    → deteksi otomatis (default)
 *   "waha"    → paksa WAHA saja (abaikan Fonnte)
 *   "fonnte"  → paksa Fonnte saja (abaikan WAHA)
 *
 * Script Properties:
 *   WHATSAPP_ENABLED, WHATSAPP_PROVIDER
 *   WAHA_BASE_URL, WAHA_API_KEY, WAHA_SESSION, FONNTE_TOKEN
 */
function getWhatsAppSettings() {
  const props = PropertiesService.getScriptProperties()

  return {
    enabled: String(props.getProperty("WHATSAPP_ENABLED") || "true").toLowerCase() !== "false",
    provider: String(props.getProperty("WHATSAPP_PROVIDER") || "auto").toLowerCase().trim()
  }
}

function isWahaConfigured() {
  return !!getWahaConfig().baseUrl
}

function isFonnteConfigured() {
  return !!getFonnteConfig().token
}

function resolveWhatsAppRouting() {
  const settings = getWhatsAppSettings()

  if (!settings.enabled) {
    return { mode: "disabled", primary: null, backup: null }
  }

  const wahaReady = isWahaConfigured()
  const fonnteReady = isFonnteConfigured()
  const forced = settings.provider

  if (forced === "waha") {
    return { mode: "single", primary: "waha", backup: null, forced: true }
  }

  if (forced === "fonnte") {
    return { mode: "single", primary: "fonnte", backup: null, forced: true }
  }

  if (wahaReady && fonnteReady) {
    return { mode: "dual", primary: "waha", backup: "fonnte", forced: false }
  }

  if (wahaReady) {
    return { mode: "single", primary: "waha", backup: null, forced: false }
  }

  if (fonnteReady) {
    return { mode: "single", primary: "fonnte", backup: null, forced: false }
  }

  return { mode: "none", primary: null, backup: null, forced: false }
}

function sendWhatsAppViaProvider(provider, phoneNumber, message) {
  if (provider === "waha") {
    return sendWhatsAppViaWaha(phoneNumber, message)
  }

  if (provider === "fonnte") {
    return sendWhatsAppViaFonnte(phoneNumber, message)
  }

  return { ok: false, skipped: true, reason: "unknown_provider", provider: provider }
}

function getWahaConfig() {
  const props = PropertiesService.getScriptProperties()

  return {
    baseUrl: String(props.getProperty("WAHA_BASE_URL") || "").replace(/\/$/, ""),
    apiKey: props.getProperty("WAHA_API_KEY") || "",
    session: props.getProperty("WAHA_SESSION") || "default"
  }
}

function getFonnteConfig() {
  const props = PropertiesService.getScriptProperties()

  return {
    token: props.getProperty("FONNTE_TOKEN") || ""
  }
}

function normalizePhoneForWhatsApp(phone) {
  if (phone == null || phone === "") return null

  let digits = String(phone).replace(/[^\d]/g, "")
  if (!digits || digits.length < 9) return null

  if (digits.startsWith("0")) {
    digits = "62" + digits.slice(1)
  }

  if (!digits.startsWith("62") && digits.length >= 9 && digits.length <= 12) {
    digits = "62" + digits
  }

  if (digits.length < 11 || digits.length > 15) return null

  return digits
}

function normalizePhoneForWaha(phone) {
  return normalizePhoneForWhatsApp(phone)
}

function sendWhatsAppViaWaha(phoneNumber, message) {
  const cfg = getWahaConfig()

  if (!cfg.baseUrl) {
    return { ok: false, skipped: true, reason: "waha_base_url_missing", provider: "waha" }
  }

  const chatId = phoneNumber + "@c.us"
  const url = cfg.baseUrl + "/api/sendText"
  const payload = {
    session: cfg.session,
    chatId: chatId,
    text: message
  }

  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  }

  if (cfg.apiKey) {
    options.headers = { "X-Api-Key": cfg.apiKey }
  }

  try {
    const response = UrlFetchApp.fetch(url, options)
    const statusCode = response.getResponseCode()
    const body = response.getContentText()

    if (statusCode >= 200 && statusCode < 300) {
      Logger.log(`[WAHA OK] ${phoneNumber}: ${body}`)
      return { ok: true, provider: "waha", phone: phoneNumber, chatId: chatId, response: body }
    }

    Logger.log(`[WAHA FAIL] ${phoneNumber} HTTP ${statusCode}: ${body}`)
    return { ok: false, provider: "waha", error: `HTTP ${statusCode}: ${body}` }
  } catch (error) {
    const errMsg = error && error.message ? error.message : String(error)
    Logger.log(`[WAHA FAIL] ${phoneNumber}: ${errMsg}`)
    return { ok: false, provider: "waha", error: errMsg }
  }
}

function sendWhatsAppViaFonnte(phoneNumber, message) {
  const cfg = getFonnteConfig()

  if (!cfg.token) {
    return { ok: false, skipped: true, reason: "fonnte_token_missing", provider: "fonnte" }
  }

  const options = {
    method: "post",
    headers: {
      Authorization: cfg.token
    },
    payload: {
      target: phoneNumber,
      message: message
    },
    muteHttpExceptions: true
  }

  try {
    const response = UrlFetchApp.fetch("https://api.fonnte.com/send", options)
    const statusCode = response.getResponseCode()
    const body = response.getContentText()

    if (statusCode >= 200 && statusCode < 300) {
      Logger.log(`[FONNTE OK] ${phoneNumber}: ${body}`)
      return { ok: true, provider: "fonnte", phone: phoneNumber, response: body }
    }

    Logger.log(`[FONNTE FAIL] ${phoneNumber} HTTP ${statusCode}: ${body}`)
    return { ok: false, provider: "fonnte", error: `HTTP ${statusCode}: ${body}` }
  } catch (error) {
    const errMsg = error && error.message ? error.message : String(error)
    Logger.log(`[FONNTE FAIL] ${phoneNumber}: ${errMsg}`)
    return { ok: false, provider: "fonnte", error: errMsg }
  }
}

function sendWhatsApp(phoneNumber, message) {
  const routing = resolveWhatsAppRouting()

  if (routing.mode === "disabled") {
    return { ok: false, skipped: true, reason: "whatsapp_disabled", routing: routing }
  }

  if (routing.mode === "none") {
    Logger.log("[WhatsApp SKIP] Tidak ada provider yang dikonfigurasi (WAHA/Fonnte kosong)")
    return { ok: false, skipped: true, reason: "whatsapp_not_configured", routing: routing }
  }

  const primaryResult = sendWhatsAppViaProvider(routing.primary, phoneNumber, message)

  if (primaryResult.ok || routing.mode !== "dual") {
    return Object.assign({}, primaryResult, { routing: routing })
  }

  Logger.log(
    `[WhatsApp] ${routing.primary} gagal, fallback ke ${routing.backup} untuk ${phoneNumber}`
  )

  const backupResult = sendWhatsAppViaProvider(routing.backup, phoneNumber, message)

  if (backupResult.ok) {
    return Object.assign({}, backupResult, {
      routing: routing,
      fallbackFrom: routing.primary,
      primaryAttempt: primaryResult
    })
  }

  return {
    ok: false,
    routing: routing,
    error: "WAHA dan Fonnte gagal",
    primary: primaryResult,
    backup: backupResult
  }
}

function setupWhatsAppProperties(config) {
  config = config || {}
  const waha = config.waha || {}
  const fonnte = config.fonnte || {}
  const props = PropertiesService.getScriptProperties()
  const values = {}

  if (config.provider !== undefined) {
    const provider = String(config.provider || "auto").toLowerCase().trim()
    if (provider !== "auto" && provider !== "waha" && provider !== "fonnte") {
      throw new Error('WHATSAPP_PROVIDER harus "auto", "waha", atau "fonnte"')
    }
    values.WHATSAPP_PROVIDER = provider
  }

  if (config.enabled !== undefined) {
    values.WHATSAPP_ENABLED = config.enabled ? "true" : "false"
  }

  if (waha.baseUrl !== undefined) {
    values.WAHA_BASE_URL = String(waha.baseUrl || "").replace(/\/$/, "")
  }
  if (waha.apiKey !== undefined) {
    values.WAHA_API_KEY = String(waha.apiKey || "")
  }
  if (waha.session !== undefined) {
    values.WAHA_SESSION = String(waha.session || "default")
  }

  if (fonnte.token !== undefined) {
    values.FONNTE_TOKEN = String(fonnte.token || "")
  }

  props.setProperties(values)

  const summary = {
    enabled: getWhatsAppSettings().enabled,
    providerSetting: getWhatsAppSettings().provider,
    routing: resolveWhatsAppRouting(),
    wahaConfigured: isWahaConfigured(),
    fonnteConfigured: isFonnteConfigured(),
    waha: getWahaConfig(),
    fonnte: { tokenSet: isFonnteConfigured() }
  }

  Logger.log("WhatsApp properties tersimpan: " + JSON.stringify(summary, null, 2))
  return summary
}

function setupWahaProperties(baseUrl, apiKey, session) {
  return setupWhatsAppProperties({
    provider: "auto",
    enabled: true,
    waha: {
      baseUrl: baseUrl,
      apiKey: apiKey,
      session: session
    }
  })
}

function setupFonnteProperties(token) {
  return setupWhatsAppProperties({
    provider: "auto",
    enabled: true,
    fonnte: {
      token: token
    }
  })
}

function setupWhatsAppDualProperties(wahaBaseUrl, wahaApiKey, wahaSession, fonnteToken) {
  return setupWhatsAppProperties({
    provider: "auto",
    enabled: true,
    waha: {
      baseUrl: wahaBaseUrl,
      apiKey: wahaApiKey,
      session: wahaSession
    },
    fonnte: {
      token: fonnteToken
    }
  })
}
