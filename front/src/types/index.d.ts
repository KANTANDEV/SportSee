export type MainData = {
	id: number
	userInfos: {
		firstName: string
		lastName: string
		age: number
	}
	todayScore: number
	keyData: {
		calorieCount: number
		proteinCount: number
		carbohydrateCount: number
		lipidCount: number
	}
}

export type Activity = {
	id: number
	session: Array<{
		day: string
		kilogram: number
		calories: number
	}>
}

export type AverageSession = {
	userId: number
	sessions: Array<{
		day: number
		sessionLength: number
	}>
}

export type Performance = {
	userId: 12
	kind: {
		1: string
		2: string
		3: string
		4: string
		5: string
		6: string
	}
	data: Array<{
		value: number
		kind: number
	}>
}
