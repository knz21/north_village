class CreateUserRelations < ActiveRecord::Migration[5.0]
  def change
    create_table :user_relations do |t|
      t.integer :user_id
      t.integer :relation_user_id

      t.timestamps
    end

    add_index :user_relations, :user_id
  end
end
