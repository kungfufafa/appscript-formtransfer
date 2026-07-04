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
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  HCM: [
    {
      email: "ester@completeselular.com",
      name: "Ester Septiany",
      title: "HR Manager"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  HRPLUS: [
    {
      email: "ester@completeselular.com",
      name: "Ester Septiany",
      title: "HR Manager"
    },
    {
      email: "yukesantoso@completeselular.com",
      name: "Yuke Santoso",
      title: "CEO",
      phone: "6283861670777"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  CSO: [
    {
      email: "jejen@mediaselularindonesia.com",
      name: "Jejen Mutakhir",
      title: "DSM"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  Markom: [
    {
      email: "ester@completeselular.com",
      name: "Ester Septiany",
      title: "HR Manager"
    },
    {
      email: "firman.syahbana@mediaselularindonesia.com",
      name: "Firman Syahbana",
      title: "COO"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  Purchase: [
    {
      email: "erny@completeselular.com",
      name: "Erniati",
      title: "SCM"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  AR: [
    {
      email: "nisa.armaju@gmail.com",
      name: "Tunisa",
      title: "AR Coordinator"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  Warehouse: [
    {
      email: "dian@completeselular.com",
      name: "Dian Fatmawati",
      title: "Warehouse Coordinator"
    },
    {
      email: "firman.syahbana@mediaselularindonesia.com",
      name: "Firman Syahbana",
      title: "COO",
      phone: "628112109181"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  WarehousePIK: [
    {
      email: "faisal@completeselular.com",
      name: "Faisal",
      title: "Warehouse Coordinator"
    },
    {
      email: "firman.syahbana@mediaselularindonesia.com",
      name: "Firman Syahbana",
      title: "COO",
      phone: "628112109181"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  Logistic: [
    {
      email: "dian@completeselular.com",
      name: "Dian Fatmawati",
      title: "Warehouse Coordinator"
    },
    {
      email: "firman.syahbana@mediaselularindonesia.com",
      name: "Firman Syahbana",
      title: "COO",
      phone: "628112109181"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  Retur: [
    {
      email: "erny@completeselular.com",
      name: "Erniati",
      title: "SCM"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  Online: [
    {
      email: "vinzrvt@gmail.com",
      name: "Kevin",
      title: "Online Manager"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  BANDARONLINE: [
    {
      email: "firman.syahbana@mediaselularindonesia.com",
      name: "Firman Syahbana",
      title: "COO",
      phone: "628112109181"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
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
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  IA: [
    {
      email: "adi@completeselular.com",
      name: "Albertus Maria Adi N.",
      title: "Business Coordinator"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  AP: [
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  TECNO: [
    {
      email: "agus.supangat@mediaselularindonesia.com",
      name: "Agus Supangat",
      title: "Chief Sales Officer",
      phone: "62818923822"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance",
      phone: "6285692578075"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  HONOR: [
    {
      email: "agus.supangat@mediaselularindonesia.com",
      name: "Agus Supangat",
      title: "Chief Sales Officer",
      phone: "62818923822"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance",
      phone: "6285692578075"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  Vilaon: [
    {
      email: "agus.supangat@mediaselularindonesia.com",
      name: "Agus Supangat",
      title: "Chief Sales Officer",
      phone: "62818923822"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance",
      phone: "6285692578075"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  MOTOROLA: [
    {
      email: "agus.supangat@mediaselularindonesia.com",
      name: "Agus Supangat",
      title: "Chief Sales Officer",
      phone: "62818923822"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance",
      phone: "6285692578075"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  ITEL: [
    {
      email: "agus.supangat@mediaselularindonesia.com",
      name: "Agus Supangat",
      title: "Chief Sales Officer",
      phone: "62818923822"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance",
      phone: "6285692578075"
    }
  ],
  Pajak: [
    {
      email: "anedss.tax@gmail.com",
      name: "Anne",
      title: "Tax Leader",
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  Transfer: [
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  Kas: [
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  Mitra: [
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  Accounting: [
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ],
  Busdev: [
    {
      email: "ester@completeselular.com",
      name: "Ester Septiany",
      title: "HR Manager"
    },
    {
      email: "yoga@autoev.co.id",
      name: "Yoga P. Hadi",
      title: "Manager Finance"
    },
    {
      email: "ia.baiti04@gmail.com",
      name: "Nurbaiti Riaseha",
      title: "Finance Coordinator"
    }
  ]
}

function App() {
  this.form = FormApp.getActiveForm()
  this.formUrl = this.form.getPublishedUrl()
  this.url = "https://script.google.com/macros/s/AKfycbzxG526rFp_8MRG2k4ExRYO8PETLs3xC1AhboLn5TUOxoiqs6bG1DnXjzKiUnJja1Tu/exec" // IMPORTANT - copy the web app url after deploy
  this.title = this.form.getTitle()
  this.desription = this.form.getDescription()
  this.sheetname = "Form Responses 4" // DO NOT change - the default google form responses sheet name
  this.flowHeader = "Divisi" // IMPORTANT - key field for your flows
  this.uidHeader = "_uid"
  this.uidPrefix = "MSI-"
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

  /*
   * Maksimal total file yang dilampirkan langsung.
   *
   * Karena salah satu file Anda sekitar 11 MB, batas 10 MB membuat:
   * - file 11 MB menjadi link Drive
   * - file 1 MB tetap dilampirkan
   */
  this.emailAttachmentSafeLimitBytes = 10 * 1024 * 1024

  /*
   * Sumber attachment utama: kolom FILE_UPLOAD pada baris/task yang sama.
   *
   * Jangan memakai _response_id untuk menentukan attachment email. Apabila
   * _response_id tertukar, body email tetap benar tetapi file dapat berasal
   * dari pengajuan lain. Dengan membaca link Drive dari task/baris yang sama,
   * body dan attachment selalu terikat ke satu record.
   */
  this.getFileUploadTitles = () => {
    if (this._fileUploadTitles) return this._fileUploadTitles

    try {
      this._fileUploadTitles = this.form
        .getItems(FormApp.ItemType.FILE_UPLOAD)
        .map(item => item.getTitle())
    } catch (error) {
      console.error(
        `Gagal membaca judul FILE_UPLOAD dari Form: ${error.message}`
      )
      this._fileUploadTitles = []
    }

    return this._fileUploadTitles
  }

  this.extractDriveFileIds = value => {
    if (value == null || value === "") return []

    const text = Array.isArray(value)
      ? value.join("\n")
      : String(value)

    const ids = []
    const seen = {}

    const add = id => {
      id = String(id || "").trim()
      if (!id || seen[id]) return
      seen[id] = true
      ids.push(id)
    }

    /* https://drive.google.com/open?id=FILE_ID atau ?id=FILE_ID */
    let match
    const queryIdPattern = /[?&]id=([A-Za-z0-9_-]{20,})/g
    while ((match = queryIdPattern.exec(text)) !== null) add(match[1])

    /* https://drive.google.com/file/d/FILE_ID/view */
    const pathIdPattern = /\/d\/([A-Za-z0-9_-]{20,})/g
    while ((match = pathIdPattern.exec(text)) !== null) add(match[1])

    /* Nilai FILE_UPLOAD dari Form kadang langsung berupa ID. */
    const directParts = text
      .split(/[\s,;]+/)
      .map(part => part.trim())
      .filter(Boolean)

    directParts.forEach(part => {
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

    /*
     * Fallback untuk form lama atau judul item yang pernah diganti. Hanya
     * kolom yang terlihat seperti kolom lampiran dan berisi URL Drive yang
     * dipindai. Tetap berasal dari task/baris yang sama.
     */
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
        const blob = file.getBlob().setName(file.getName())

        entries.push({
          id: fileId,
          name: file.getName(),
          size: file.getSize(),
          url: file.getUrl(),
          blob: blob,
          source: "sheet_row"
        })
      } catch (error) {
        console.error(
          `Gagal membaca file dari baris/task ${fileId}: ${error.message}`
        )
      }
    })

    return entries
  }

  this.prepareEmailAttachmentsFromEntries = entries => {
    entries = Array.isArray(entries) ? entries : []

    const attachments = []
    const linkedFiles = []

    let attachedBytes = 0
    let totalBytes = 0

    entries.forEach(entry => {
      totalBytes += entry.size

      const canAttach =
        entry.size <= this.emailAttachmentSafeLimitBytes &&
        attachedBytes + entry.size <= this.emailAttachmentSafeLimitBytes

      if (canAttach) {
        attachments.push(entry.blob)
        attachedBytes += entry.size
      } else {
        linkedFiles.push(entry)
      }
    })

    return {
      attachments,
      linkedFiles,
      allFiles: entries,
      attachedBytes,
      totalBytes,
      totalFiles: entries.length,
      attachmentSource: "sheet_row_file_upload_columns"
    }
  }

  this.prepareEmailAttachmentsFromTask = task => {
    const entries = this.getAttachmentEntriesFromTask(task)
    return this.prepareEmailAttachmentsFromEntries(entries)
  }

  /*
   * Fungsi berbasis responseId dipertahankan hanya untuk audit/repair lama.
   * Fungsi kirim email TIDAK BOLEH menggunakan fungsi ini lagi.
   */
  this.getAttachmentEntriesByResponseId = (responseId) => {
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
        const ids = Array.isArray(fileIds)
          ? fileIds
          : (fileIds ? [fileIds] : [])

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
            console.error(
              `Failed to read uploaded file ${fileId}: ${error.message}`
            )
          }
        })
      })

      return entries
    } catch (error) {
      console.error(
        `Failed to get attachments for response ${responseId}: ${error.message}`
      )
      return []
    }
  }

  this.getAttachmentsByResponseId = responseId => {
    return this
      .getAttachmentEntriesByResponseId(responseId)
      .map(entry => entry.blob)
  }

  this.prepareEmailAttachmentsByResponseId = responseId => {
    return this.prepareEmailAttachmentsFromEntries(
      this.getAttachmentEntriesByResponseId(responseId)
    )
  }

  this.buildLargeAttachmentNoticeHtml = (payload) => {
    if (
      !payload ||
      !payload.linkedFiles ||
      !payload.linkedFiles.length
    ) {
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
      <li style="margin:6px 0">
        <a
          href="${escapeHtml(file.url)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${escapeHtml(file.name)}
        </a>
        (${formatBytes(file.size)})
      </li>
    `
    }).join("")

    return `
    <div style="
      margin-top:20px;
      padding:14px;
      border:1px solid #f4b400;
      border-radius:8px;
      background:#fff8e1;
      color:#3c4043;
    ">
      <strong>Dokumen lampiran</strong>

      <p style="margin:8px 0">
        Sebagian file tidak dilampirkan langsung karena ukurannya besar.
        Silakan buka melalui Google Drive:
      </p>

      <ul style="margin:0;padding-left:20px">
        ${fileItems}
      </ul>

      <p style="margin:8px 0 0;font-size:12px;color:#5f6368">
        Pastikan penerima memiliki izin untuk membuka file.
      </p>
    </div>
  `
  }

  this.sendEmailWithAttachmentFallback = ({
    recipient,
    subject,
    baseHtmlBody,
    attachmentPayload
  }) => {
    const htmlBody =
      baseHtmlBody +
      this.buildLargeAttachmentNoticeHtml(attachmentPayload)

    const options = {
      htmlBody: htmlBody
    }

    if (attachmentPayload.attachments.length) {
      options.attachments = attachmentPayload.attachments
    }

    try {
      GmailApp.sendEmail(
        recipient,
        subject,
        "",
        options
      )

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
      const message = error && error.message
        ? error.message
        : String(error)

      const isAttachmentLimitError =
        /Email Total Attachments Size|Email Attachments Per Message|Limit Exceeded.*Attachment/i
          .test(message)

      /*
       * Error selain batas attachment tetap dilempar,
       * misalnya email tidak valid atau kuota pengiriman habis.
       */
      if (
        !attachmentPayload.attachments.length ||
        !isAttachmentLimitError
      ) {
        throw error
      }

      console.warn(
        `Attachment ditolak untuk ${recipient}. ` +
        `Email dikirim ulang menggunakan link Drive.`
      )

      const linksOnlyPayload = Object.assign(
        {},
        attachmentPayload,
        {
          attachments: [],
          linkedFiles: attachmentPayload.allFiles
        }
      )

      GmailApp.sendEmail(
        recipient,
        subject,
        "",
        {
          htmlBody:
            baseHtmlBody +
            this.buildLargeAttachmentNoticeHtml(linksOnlyPayload)
        }
      )

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
  }

  this.sendApproval = ({
    task,
    approver,
    approvers,
    responseId
  }) => {
    const template =
      HtmlService.createTemplateFromFile("approval_email.html")

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

    const attachmentPayload =
      this.prepareEmailAttachmentsFromTask(task)

    return this.sendEmailWithAttachmentFallback({
      recipient: approver.email,
      subject: subject,
      baseHtmlBody: template.evaluate().getContent(),
      attachmentPayload: attachmentPayload
    })
  }

  this.sendNotification = (taskId) => {
    const {
      email,
      responseId,
      status,
      task,
      approvers
    } = this.getTaskById(taskId)

    if (!email) {
      throw new Error(
        "Email pengaju tidak ditemukan untuk taskId: " + taskId
      )
    }

    const template =
      HtmlService.createTemplateFromFile("notification_email.html")

    template.title = this.title
    template.task = task
    template.status = status
    template.approvers = approvers
    template.formUrl = this.formUrl
    template.approvalProgressUrl =
      `${this.url}?responseId=${responseId}`

    template.approved = this.approved
    template.rejected = this.rejected
    template.pending = this.pending
    template.waiting = this.waiting

    const subject = `Approval ${status} - ${this.title}`

    const attachmentPayload =
      this.prepareEmailAttachmentsFromTask(task)

    return this.sendEmailWithAttachmentFallback({
      recipient: email,
      subject: subject,
      baseHtmlBody: template.evaluate().getContent(),
      attachmentPayload: attachmentPayload
    })
  }

  /*
   * Normalisasi nilai untuk mencocokkan event Form dengan baris Spreadsheet.
   * File upload sengaja tidak dipakai sebagai pembanding karena Form memberi ID,
   * sedangkan Spreadsheet menampilkan URL Drive.
   */
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

  /*
   * Temukan baris Spreadsheet yang benar-benar berasal dari e.response.
   * Jangan pernah memakai getResponses()[terakhir] + baris terakhir karena
   * dua submit yang berdekatan dapat membuat responseId dan data tertukar.
   */
  this.findSheetRowForResponse = response => {
    if (!response) {
      throw new Error("Event Form tidak memiliki e.response.")
    }

    const responseTimestamp = response.getTimestamp().getTime()
    const respondentEmail = this.normalizeResponseMatchValue(
      response.getRespondentEmail ? response.getRespondentEmail() : ""
    )

    const responseItems = response.getItemResponses()
      .filter(itemResponse => {
        return itemResponse.getItem().getType() !== FormApp.ItemType.FILE_UPLOAD
      })
      .map(itemResponse => {
        return {
          title: itemResponse.getItem().getTitle(),
          value: this.normalizeResponseMatchValue(itemResponse.getResponse())
        }
      })

    /*
     * Kadang event Form berjalan sangat cepat sebelum row selesai terlihat
     * pada Spreadsheet. Coba beberapa kali dalam waktu singkat.
     */
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

        /* Spreadsheet umumnya menyimpan timestamp sampai detik. */
        if (Math.abs(rowTimestamp - responseTimestamp) > 2000) continue

        if (respondentEmail && emailColumn >= 0) {
          const rowEmail = this.normalizeResponseMatchValue(
            displayValues[rowIndex][emailColumn]
          )

          if (rowEmail !== respondentEmail) continue
        }

        let score = 0

        responseItems.forEach(responseItem => {
          const columnIndex = headers.indexOf(responseItem.title)
          if (columnIndex === -1) return

          const rowValue = this.normalizeResponseMatchValue(
            displayValues[rowIndex][columnIndex]
          )

          if (rowValue === responseItem.value) score++
        })

        if (score > bestScore) {
          bestScore = score
          bestRow = rowIndex + 1 // Spreadsheet row is 1-based.
        }
      }

      if (bestRow) return bestRow

      Utilities.sleep(500)
    }

    throw new Error(
      "Baris Spreadsheet untuk Form Response " + response.getId() +
      " tidak ditemukan."
    )
  }

  // Tambahkan metadata approval ke response yang benar-benar memicu event.
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
      const values = this.parsedValues()
      const headers = values[0]

      let startColumn = headers.indexOf(this.uidHeader) + 1
      if (startColumn === 0) startColumn = headers.length + 1

      const flowColumn = headers.indexOf(this.flowHeader)
      if (flowColumn === -1) {
        throw new Error(
          'Kolom flow "' + this.flowHeader + '" tidak ditemukan.'
        )
      }

      const flowKey = values[submittedRow - 1][flowColumn]

      /* Clone supaya object di FLOWS tidak dimutasi antar-submit. */
      const flow = (FLOWS[flowKey] || FLOWS.defaultFlow)
        .map(item => Object.assign({}, item))

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
    } finally {
      lock.releaseLock()
    }

    /* Email dikirim setelah lock dilepas agar submit lain tidak tertahan lama. */
    this.sendNotification(taskId)

    const { task, approver, approvers } = this.getTaskById(taskId)

    this.sendApproval({
      task,
      approver,
      approvers,
      responseId
    })
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

/*
 * Perbaiki _response_id untuk data lama yang sudah telanjur tertukar.
 * Contoh pemakaian dari Apps Script editor:
 *   repairResponseIdByUid("MSI-04476")
 */
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

  if (uidColumn === -1) {
    throw new Error('Kolom "' + app.uidHeader + '" tidak ditemukan.')
  }

  if (responseIdColumn === -1) {
    throw new Error('Kolom "' + app.responseIdHeader + '" tidak ditemukan.')
  }

  if (timestampColumn === -1) {
    throw new Error('Kolom "Timestamp" tidak ditemukan.')
  }

  const rowIndex = displayValues.findIndex((row, index) => {
    return index > 0 && String(row[uidColumn]).trim() === String(uid).trim()
  })

  if (rowIndex === -1) {
    throw new Error("UID tidak ditemukan: " + uid)
  }

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

      const rowValue = app.normalizeResponseMatchValue(
        displayValues[rowIndex][columnIndex]
      )

      const responseValue = app.normalizeResponseMatchValue(
        itemResponse.getResponse()
      )

      if (rowValue === responseValue) score++
    })

    if (score > bestScore) {
      bestScore = score
      bestResponse = response
    }
  })

  if (!bestResponse) {
    throw new Error(
      "Form Response yang cocok tidak ditemukan untuk UID: " + uid
    )
  }

  const oldResponseId = displayValues[rowIndex][responseIdColumn]
  const newResponseId = bestResponse.getId()

  app.sheet
    .getRange(rowIndex + 1, responseIdColumn + 1)
    .setValue(newResponseId)

  SpreadsheetApp.flush()

  const attachmentFiles = app
    .getAttachmentEntriesByResponseId(newResponseId)
    .map(file => ({
      id: file.id,
      name: file.name,
      size: file.size,
      url: file.url
    }))

  const result = {
    uid: uid,
    sheetRow: rowIndex + 1,
    oldResponseId: oldResponseId,
    newResponseId: newResponseId,
    matchedFields: bestScore,
    attachmentFiles: attachmentFiles
  }

  Logger.log(JSON.stringify(result, null, 2))

  return result
}


/*
 * Audit file yang akan dikirim berdasarkan baris UID, tanpa mengirim email.
 * Contoh dari editor/konsol: auditAttachmentByUid("MSI-04476")
 */
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

  const fileFields = task.filter(field => {
    return app.getFileUploadTitles().indexOf(field.label) !== -1
  })

  const files = app.getAttachmentEntriesFromTask(task).map(file => ({
    id: file.id,
    name: file.name,
    size: file.size,
    url: file.url,
    source: file.source
  }))

  const result = {
    uid: uid,
    sheetRow: rowIndex + 1,
    fileUploadFields: fileFields,
    filesThatWillBeSent: files
  }

  Logger.log(JSON.stringify(result, null, 2))
  return result
}

/*
 * Hapus trigger submit lama/duplikat untuk handler yang sama, lalu buat satu
 * installable trigger dari Google Form. Jalankan sekali setelah memasang V2.
 */
function reinstallFormSubmitTrigger() {
  const handlerName = "_onFormSubmit"

  ScriptApp.getProjectTriggers().forEach(trigger => {
    const isFormSubmit =
      trigger.getEventType() === ScriptApp.EventType.ON_FORM_SUBMIT

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

/***********************
 * RESEND CONFIG
 ***********************/
const RESEND_CFG = {
  // Spreadsheet ID tempat responses berada
  SPREADSHEET_ID: "1lfSJbtFPqE6TFWEHVg05Yof-CMJKrFkHXvYUxRgnHYI",

  // Nama tab responses
  SHEET_NAME: "Form Responses 4",

  // WebApp URL untuk link approve
  WEBAPP_URL_EMAIL: "https://script.google.com/macros/s/AKfycbzxG526rFp_8MRG2k4ExRYO8PETLs3xC1AhboLn5TUOxoiqs6bG1DnXjzKiUnJja1Tu/exec"
};


/***********************
 * SHEET HELPER
 ***********************/
function getResponsesSheetSafe_() {
  const ss = SpreadsheetApp.openById(RESEND_CFG.SPREADSHEET_ID);
  const sheet = ss.getSheetByName(RESEND_CFG.SHEET_NAME);

  if (!sheet) {
    throw new Error(
      'Sheet "' + RESEND_CFG.SHEET_NAME + '" tidak ditemukan di Spreadsheet ID: ' +
      RESEND_CFG.SPREADSHEET_ID
    );
  }

  return sheet;
}


/***********************
 * PARSE SHEET VALUES
 ***********************/
function getParsedSheetValues_(sheet) {
  const values = sheet.getDataRange().getDisplayValues();

  return values.map(row => {
    return row.map(cell => {
      try {
        return JSON.parse(cell);
      } catch (e) {
        return cell;
      }
    });
  });
}


/***********************
 * BUILD INDEX FROM SHEET
 ***********************/
function buildIndexFromSheet_(sheet) {
  const values = getParsedSheetValues_(sheet);
  const headers = values[0];

  const uidCol = headers.indexOf("_uid");
  const statusCol = headers.indexOf("_status");
  const responseIdCol = headers.indexOf("_response_id");
  const emailCol = headers.indexOf("Email Address");

  if (uidCol === -1) throw new Error('Kolom "_uid" tidak ditemukan.');
  if (statusCol === -1) throw new Error('Kolom "_status" tidak ditemukan.');
  if (responseIdCol === -1) throw new Error('Kolom "_response_id" tidak ditemukan.');

  const uidToRowIndex = new Map();

  for (let i = 1; i < values.length; i++) {
    const uid = values[i][uidCol];
    if (uid) {
      uidToRowIndex.set(uid, i);
    }
  }

  return {
    values,
    headers,
    uidCol,
    statusCol,
    responseIdCol,
    emailCol,
    uidToRowIndex
  };
}


/***********************
 * EXTRACT TASK + APPROVERS
 ***********************/
function extractTaskAndApproversFromRow_({
  row,
  headers,
  statusCol,
  responseIdCol,
  emailCol
}) {
  const task = row.slice(0, statusCol + 1).map((item, i) => {
    return {
      label: headers[i],
      value: item
    };
  });

  const approvers = row.filter(item => {
    return item && typeof item === "object" && item.taskId;
  });

  const pendingApprovers = approvers.filter(approver => {
    return approver.status === "Pending";
  });

  return {
    task,
    approvers,
    pendingApprovers,
    responseId: row[responseIdCol],
    requesterEmail: emailCol >= 0 ? row[emailCol] : ""
  };
}


/***********************
 * SEND RESEND APPROVAL
 ***********************/
function sendResendApprovalEmail_({
  app,
  task,
  approver,
  approvers,
  responseId,
  webAppUrl
}) {
  const template =
    HtmlService.createTemplateFromFile("approval_email.html")

  template.title = app.title
  template.task = task
  template.approver = approver
  template.approvers = approvers
  template.actionUrl =
    `${webAppUrl}?taskId=${approver.taskId}`
  template.formUrl = app.formUrl

  template.approved = app.approved
  template.rejected = app.rejected
  template.pending = app.pending
  template.waiting = app.waiting

  const subject =
    "Approval Required - " + app.title

  const attachmentPayload =
    app.prepareEmailAttachmentsFromTask(task)

  return app.sendEmailWithAttachmentFallback({
    recipient: approver.email,
    subject: subject,
    baseHtmlBody: template.evaluate().getContent(),
    attachmentPayload: attachmentPayload
  })
}


/***********************
 * RESEND APPROVAL + PENGAJU
 ***********************/
function resendPendingApprovals_Email(uids, webAppUrl) {
  uids = Array.isArray(uids) ? uids : []

  webAppUrl =
    webAppUrl || RESEND_CFG.WEBAPP_URL_EMAIL

  if (!uids.length) {
    throw new Error(
      'UIDS kosong. Jalankan fungsi ' +
      '"resendPendingApprovals_MSI_Bulk_ToEmail".'
    )
  }

  const sheet = getResponsesSheetSafe_()
  const app = new App()

  const {
    values,
    headers,
    statusCol,
    responseIdCol,
    emailCol,
    uidToRowIndex
  } = buildIndexFromSheet_(sheet)

  const summary = {
    totalUid: uids.length,
    totalApprovalSent: 0,
    totalRequesterSent: 0,
    approvalOk: [],
    requesterOk: [],
    fail: []
  }

  uids.forEach(uid => {
    const rowIndex = uidToRowIndex.get(uid)

    if (rowIndex == null) {
      summary.fail.push({
        uid: uid,
        type: "data",
        reason: "UID tidak ditemukan di sheet."
      })

      return
    }

    const row = values[rowIndex]

    const {
      task,
      approvers,
      pendingApprovers,
      responseId,
      requesterEmail
    } = extractTaskAndApproversFromRow_({
      row,
      headers,
      statusCol,
      responseIdCol,
      emailCol
    })

    if (!pendingApprovers.length) {
      summary.fail.push({
        uid: uid,
        type: "approval",
        reason: "Tidak ada approver berstatus Pending."
      })

      return
    }

    /*
     * Kirim ulang email ke semua approver Pending.
     */
    pendingApprovers.forEach(approver => {
      if (!approver.email) {
        summary.fail.push({
          uid: uid,
          type: "approval",
          approverName: approver.name || "",
          reason: "Email approver kosong."
        })

        return
      }

      try {
        const result = sendResendApprovalEmail_({
          app,
          task,
          approver,
          approvers,
          responseId,
          webAppUrl
        })

        summary.approvalOk.push({
          uid: uid,
          approverName: approver.name || "",
          sentTo: approver.email,
          attachedFiles: result.attachedFiles,
          linkedFiles: result.linkedFiles,
          fileNames: result.fileNames,
          fileIds: result.fileIds,
          attachmentSource: result.attachmentSource,
          fallbackToLinks: result.fallbackToLinks
        })

        summary.totalApprovalSent++
      } catch (error) {
        summary.fail.push({
          uid: uid,
          type: "approval",
          approverName: approver.name || "",
          approverEmail: approver.email || "",
          reason: error && error.message
            ? error.message
            : String(error)
        })
      }
    })

    /*
     * Kirim ulang notifikasi status Pending ke pengaju.
     * Cukup satu kali per UID, bukan satu kali per approver.
     */
    try {
      if (!requesterEmail) {
        throw new Error(
          'Kolom "Email Address" pengaju kosong.'
        )
      }

      const pendingTaskId =
        pendingApprovers[0].taskId

      const result =
        app.sendNotification(pendingTaskId)

      summary.requesterOk.push({
        uid: uid,
        sentTo: requesterEmail,
        status: "Pending",
        attachedFiles: result.attachedFiles,
        linkedFiles: result.linkedFiles,
        fileNames: result.fileNames,
        fileIds: result.fileIds,
        attachmentSource: result.attachmentSource,
        fallbackToLinks: result.fallbackToLinks
      })

      summary.totalRequesterSent++
    } catch (error) {
      summary.fail.push({
        uid: uid,
        type: "requester",
        requesterEmail: requesterEmail || "",
        reason: error && error.message
          ? error.message
          : String(error)
      })
    }
  })

  Logger.log(
    "========== RESEND APPROVAL + REQUESTER SUMMARY =========="
  )

  Logger.log(
    JSON.stringify(summary, null, 2)
  )

  return summary
}

function resendPendingApprovals_MSI_Bulk_ToEmail() {
  const UIDS = [
    "MSI-04476"
  ];

  return resendPendingApprovals_Email(
    UIDS,
    RESEND_CFG.WEBAPP_URL_EMAIL
  );
}