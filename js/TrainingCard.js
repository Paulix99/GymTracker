class TrainingCard{
	constructor(user){
		this.date = new Date().toLocaleDateString();
		this.user = user;
		this.type = "";
		this.training = [
			{
				exercise: "",
				sets: [],
				reps: [],
				weight: []
			}
		];
	}

	set trainingType(type){
		this.type = type;
	}

	updateExercise(exercise_index, set_index, exercise, sets, reps, weight){
		this.training[exercise_index].exercise = exercise;
		this.training[exercise_index].sets.splice(set_index, 1, set_index + 1);
		this.training[exercise_index].reps.splice(set_index, 1, reps);
		this.training[exercise_index].weight.splice(set_index, 1, weight);
	}

	addNewExercise(){
		this.training.push(
			{
				exercise: "",
				sets: [],
				reps: [],
				weight: []
			}
		);
	}

	get trainingCardInfo(){
		let trainingInfo = [this.date, this.user, this.type]
		for(let exercise of this.training){
			trainingInfo.push(exercise)
		}

		console.log(`Done: ${trainingInfo[0]}, \nBy: ${trainingInfo[1]}, \nCategory: ${trainingInfo[2]}`);

		for(let i = 3; i < trainingInfo.length; i++){
			let exercise = trainingInfo[i]["exercise"];
			let sets = trainingInfo[i]["sets"];
			let reps = trainingInfo[i]["reps"];
			let weight = trainingInfo[i]["weight"];

			console.log(`\tExercise: ${exercise}, \n\t\tSets: ${sets}, \n\t\tReps: ${reps}, \n\t\tWeight: ${weight}`);
		}

		return trainingInfo;
	}
}

const card = new TrainingCard("Ivan");
card.trainingType = "Push";
card.updateExercise(0, 0, "Press banca", 4, 10, 60);

card.addNewExercise();
card.updateExercise(1, 0, "Elevaciones laterales", 4, 10, 10);

card.addNewExercise();
card.updateExercise(2, 0, "Aperturas", 4, 10, 80);
card.updateExercise(2, 1, "Aperturas", 4, 10, 85);
card.updateExercise(2, 2, "Aperturas", 4, 10, 75);

trainingInfo = card.trainingCardInfo

console.log(trainingInfo);
