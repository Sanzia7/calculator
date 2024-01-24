import { useState } from 'react'
import styles from './App.module.css'

export const App = () => {
	const [operand1, setOperand1] = useState('0')
	const [operand2, setOperand2] = useState('')
	const [operator, setOperator] = useState('')
	const [isResult, setIsResult] = useState(false)

	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

	const output = operand1 + operator + operand2

	return (
		<div className={styles.app}>
			<h1>Calculator</h1>
			<div className={styles.container}>
				<div className={`${styles.screen} ${isResult ? styles.result : ''}`}>
					{output}
				</div>
				<div className={styles.btns}>
					<div className={styles.leftBtns}>
						{NUMS.map((num) => (
							<button
								className={styles.btn}
								onClick={() => {
									if (operator === '') {
										if (operand1 === '0') {
											setOperand1(num)
										} else {
											setOperand1(operand1 + num)
										}
									} else {
										if (operand2 === '0') {
											setOperand2(num)
										} else {
											setOperand2(operand2 + num)
										}
									}
									setIsResult(false)
								}}
							>
								{num}
							</button>
						))}
					</div>
					<div className={styles.rightBtns}>
						<button
							className={styles.btn}
							onClick={() => {
								setOperand1('0')
								setOperand1('')
								setOperator('')
								setIsResult(false)
							}}
						>
							C
						</button>
						<button
							className={styles.btn}
							onClick={() => {
								setOperator('+')
								setIsResult(false)
							}}
						>
							+
						</button>
						<button
							className={styles.btn}
							onClick={() => {
								setOperator('-')
								setIsResult(false)
							}}
						>
							-
						</button>
						<button
							className={styles.btn}
							onClick={() => {
								if (operand2 !== '') {
									switch (operator) {
										case '+':
											setOperand1(Number(operand1) + Number(operand2))
											break

										case '-':
											setOperand1(Number(operand1) - Number(operand2))
											break

										default:
										//ничего не длеаем
									}
									setOperand2('')
								}
								setOperator('')
								setIsResult(true)
							}}
						>
							=
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
