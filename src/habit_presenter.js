//logic for habit tracker UI

export default class HabitPresenter {
    constructor(habits, maxHabits){
        this.habits = habits;
        this.maxHabits = maxHabits;
    }

    getHabits(){
        return this.habits;
    }

    increment(habit, update){
        this.habits = this.habits.map(item => {
            if (item.id === habit.id) {
              return { ...habit, count: habit.count + 1 };
            }
            return item;
          });

        update(this.habits);
    }

    decrement(habit, update){
        this.habits = this.habits.map(item => {
            if (item.id === habit.id) {
              const count = item.count - 1;
              return { ...habit, count: count < 0 ? 0 : count };
            }
            return item;
          })
          update(this.habits);
    }

    delete(habit, deleteHabit){
        this.habits = this.habits.filter(item => item.id !== habit.id)
        deleteHabit(this.habits);
    }

    add(name, addHabit){
      if(this.habits.length === this.maxHabits){
        throw new Error(`number of habits cannot be over ${this.maxHabits}`)
      }
        this.habits = [...this.habits, { id: Date.now(), name, count: 0 }]
        addHabit(this.habits);
    }

    reset(resetHabit){
       this.habits = this.habits.map(habit => {
        if (habit.count !== 0) {
           return { ...habit, count: 0 };
        }
        return habit;
      })
      resetHabit(this.habits);

    }


}