_operation = {
	"version": "1.0",
	"name": "NoTypeOperation",
	"title": {
		"en": "No Type Operation",
		"ru": "Операция без типа"
	},
	"category": {
		"name": "General",
		"title": {
			"en": "General",
			"ru": "Общее"
		}
	},
	"subcategory": {
		"name": "Arbitrary",
		"title": {
			"en": "Arbitrary Operations",
			"ru": "Произвольные операции"
		}
	},
	"fields": [
		{
			"name": "Title",
			"title": {
				"en": "Title",
				"ru": "Название"
			},
			"description": {
				"en": "Title of the custom operation",
				"ru": "Название произвольной операции"
			},
			"type": "text"
		},
		{
			"name": "Description",
			"title": {
				"en": "Description",
				"ru": "Описание"
			},
			"description": {
				"en": "Description of the custom operation",
				"ru": "Описание произвольной операции"
			},
			"type": "textarea"
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
			"name": "Files",
			"title": {
				"en": "Files",
				"ru": "Файлы"
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