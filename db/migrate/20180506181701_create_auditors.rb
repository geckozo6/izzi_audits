class CreateAuditors < ActiveRecord::Migration[5.1]
  def change
    create_table :auditors do |t|
      t.text :number
      t.text :name
      t.date :bitrthday
      t.text :phone

      t.timestamps
    end
  end
end
