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
			"description": {
				"en": "Enter Full Name of the applicant",
				"ru": "Фамилия, Имя, Отчество заявителя"
			},
			"type": "text"
		},
		{
			"name": "Passport",
			"title": {
				"en": "Governmental ID (SSN)",
				"ru": "Паспорт"
			},
			"description": {
				"en": "ID of the applicant issued in his/her country",
				"ru": "Идентификационный документ заявителя, выданный в его стране"
			},
			"type": "text"
		},
		{
			"name": "Scan",
			"title": {
				"en": "Scanned Copy of the Application",
				"ru": "Скан заявления"
			},
			"description": {
				"en": "Locate a scan image of the paper application",
				"ru": "Укажите путь к файлу изображения скана заявления"
			},
			"type": "file"
		},
		{
			"name": "Operator",
			"title": {
				"en": "Operator",
				"ru": "Оператор"
			},
			"description": {
				"en": "Hash string of the operator's party admission operation",
				"ru": "Хеш-строка операции приема оператора в члены партии"
			},
			"type": "text"
		},
		{
			"name": "Empowerment",
			"title": {
				"en": "Empowerment",
				"ru": "Полномочия"
			},
			"description": {
				"en": "Hash string of the operator's empowerment operation which grants him/her rights to accept party admission forms",
				"ru": "Хеш-строка операции, уполномочивающей оператора принимать заявления по приему в партию"
			},
			"type": "text"
		},
		{
			"name": "Comments",
			"title": {
				"en": "Comments",
				"ru": "Комментарии"
			},
			"description": {
				"en": "Any additional text/operator comments needed for the operation",
				"ru": "Какой-либо дополнительный текст или замечания оператора к операции"
			},
			"type": "textarea"
		},
		{
			"name": "CustomJSON",
			"title": {
				"en": "Custom JSON object",
				"ru": "Дополнительный объект JSON"
			},
			"description": {
				"en": "A string, containing a custom JSON object, enclosed in {}, with some extra data",
				"ru": "Строка с дополнительным объектом JSON, заключенным в {}, содержащим дополнительные данные"
			},
			"type": "textarea",
			"value": "{}"
		},
		{
			"name": "AdditionalFiles",
			"title": {
				"en": "Additional Files",
				"ru": "Дополнительные файлы"
			},
			"description": {
				"en": "Select one or more files that can supplement the operation. Only small files allowed",
				"ru": "Выберите один или несколько дополнительных файлов, которые могут дополнить операцию. Допустимы только небольшие файлы."
			},
			"type": "file",
			"attributes": [{
				"name": "multiple",
				"value": ""
			}]
		}
	]
};