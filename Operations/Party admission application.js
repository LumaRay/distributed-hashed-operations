_operation = {
	"version": "1.0",
	"name": "PartyAdmission",
	"title": {
		"en": "Party Admission",
		"ru": "Прием в партию"
	},
	"category": {
		"name": "Notices",
		"title": {
			"en": "Applications",
			"ru": "Заявления"
		}
	},
	"subcategory": {
		"name": "NewPartyMember",
		"title": {
			"en": "Admission to Party Members",
			"ru": "Прием в члены партии"
		}
	},
	"fields": [{
			"name": "FullName",
			"title": {
				"en": "Full Name",
				"ru": "Ф.И.О."
			},
			"type": "text"
		},
		{
			"name": "Passport",
			"title": {
				"en": "Governmental ID (SSN)",
				"ru": "Паспорт"
			},
			"type": "text"
		},
		{
			"name": "Scan",
			"title": {
				"en": "Scanned Copy of the Application",
				"ru": "Скан заявления"
			},
			"type": "file"
		},
		{
			"name": "Comments",
			"title": {
				"en": "Comments",
				"ru": "Комментарии"
			},
			"type": "textarea"
		},
		{
			"name": "AdditionalFiles",
			"title": {
				"en": "Additional Files",
				"ru": "Дополнительные файлы"
			},
			"type": "file",
			"attributes": [{
				"name": "multiple",
				"value": ""
			}]
		}
	]
};