class TrainingCard{
	constructor(user){
		this.date = new Date().toLocaleDateString();
		this.user = user;
		this.type = "";
		this.training = [
			/*{
				exercise: "",
				sets: [{
					reps: 0,
					weight: 0
				}]
			}*/
		];
	}

	set trainingType(type){
		this.type = type;
	}

	addNewExercise(){
		this.training.push(
			{
				exercise: "",
				sets: [{
					reps: 0,
					weight: 0
				}]
			}
		);
	}

	addNewSet(exercise_index){
		this.training[exercise_index].sets.push(
			{
				reps: 0,
				weight: 0
			}
		);
	}

	updateExercise(exercise_index, set_index, exercise, reps, weight){
		if(this.training.length <= exercise_index){
			this.addNewExercise();
		}

		if(this.training[exercise_index].sets.length <= set_index){
			this.addNewSet(exercise_index);
		}

		this.training[exercise_index].exercise = exercise;
		this.training[exercise_index].sets[set_index].reps = reps;
		this.training[exercise_index].sets[set_index].weight = weight;
	}

	get trainingCardInfo(){
		let trainingInfo = [this.date, this.user, this.type]
		for(let exercise of this.training){
			trainingInfo.push(exercise)

		}

		console.log(`Done: ${trainingInfo[0]}, \nBy: ${trainingInfo[1]}, \nCategory: ${trainingInfo[2]}`);

		for(let i = 3; i < trainingInfo.length; i++){
				console.log(`\n\tExercise: ${trainingInfo[i].exercise}`)

			for(let j = 0; j < trainingInfo[i]["sets"].length; j++){
				let reps = trainingInfo[i]["sets"][j].reps;
				let weight = trainingInfo[i]["sets"][j].weight;

				console.log(`\t\tReps: ${reps}, \n\t\tWeight: ${weight}\n`);
			}

			
		}

		return trainingInfo;
	}
}

const card = new TrainingCard("Ivan");
card.trainingType = "Push";
card.updateExercise(0, 0, "Press banca", 10, 60);
card.updateExercise(1, 0, "Elevaciones laterales", 10, 10);
card.updateExercise(2, 0, "Aperturas", 10, 80);
card.updateExercise(2, 1, "Aperturas", 10, 85);

trainingInfo = card.trainingCardInfo

console.log(trainingInfo[3]);
console.log(trainingInfo[4])
console.log(trainingInfo[5])