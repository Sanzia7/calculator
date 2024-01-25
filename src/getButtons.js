//импортируем все обработчики событий для кнопок из паки  handlers/обработчики
import {
	handleMinus,
	handleNum,
	handlePlus,
	handleMultiply,
	handleDivide,
	handleReset,
	handleResult,
} from './handlers'

//экспортируем функцию, которая получает из состояния (state) любые изменения для каждой кнопки калькулятора и произодит действия внутри используемой кнопки
export const getButtons = (state) => [
	{ id: '1', label: '1', group: 'left', handler: (label) => handleNum(state, label) },
	{ id: '2', label: '2', group: 'left', handler: (label) => handleNum(state, label) },
	{ id: '3', label: '3', group: 'left', handler: (label) => handleNum(state, label) },
	{ id: '4', label: '4', group: 'left', handler: (label) => handleNum(state, label) },
	{ id: '5', label: '5', group: 'left', handler: (label) => handleNum(state, label) },
	{ id: '6', label: '6', group: 'left', handler: (label) => handleNum(state, label) },
	{ id: '7', label: '7', group: 'left', handler: (label) => handleNum(state, label) },
	{ id: '8', label: '8', group: 'left', handler: (label) => handleNum(state, label) },
	{ id: '9', label: '9', group: 'left', handler: (label) => handleNum(state, label) },
	{ id: '0', label: '0', group: 'left', handler: (label) => handleNum(state, label) },
	{ id: 'C', label: 'C', group: 'left', handler: () => handleReset(state) },
	{ id: '+', label: '+', group: 'right', handler: () => handlePlus(state) },
	{ id: '-', label: '-', group: 'right', handler: () => handleMinus(state) },
	{ id: '*', label: '*', group: 'right', handler: () => handleMultiply(state) },
	{ id: '/', label: '/', group: 'right', handler: () => handleDivide(state) },
	{ id: '=', label: '=', group: 'right', handler: () => handleResult(state) },
]
