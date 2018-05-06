class CreateAqls < ActiveRecord::Migration[5.1]
  def change
    create_table :aqls do |t|
      t.string :letter_code
      t.float :aql
      t.text :batch_size
      t.integer :fisrt_sample
      t.integer :first_rejection
      t.integer :second_Sample
      t.integer :second_rejection

      t.timestamps
    end
  end
end
