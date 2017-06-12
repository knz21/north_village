class CreateInputData < ActiveRecord::Migration[5.0]
  def change
    create_table :input_data do |t|
      t.integer :user_id
      t.integer :part_id
      t.integer :count

      t.timestamps
    end
  end
end
