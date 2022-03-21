//logic for habit tracker UI

export default class HabitPresenter {
    constructor(habits){
        this.habits = habits;
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
              const count = habit.count - 1;
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