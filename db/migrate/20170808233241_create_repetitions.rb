class CreateRepetitions < ActiveRecord::Migration[5.0]
  def change
    create_table :repetitions do |t|
      t.integer :user_id
      t.integer :part_id
      t.integer :rep
      t.date :work_out_date

      t.timestamps
    end
  end
end
