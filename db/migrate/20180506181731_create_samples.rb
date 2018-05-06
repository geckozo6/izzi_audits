class CreateSamples < ActiveRecord::Migration[5.1]
  def change
    create_table :samples do |t|
      t.text :delivery_folio
      t.text :item
      t.text :provider
      t.text :business_name
      t.references :aql, foreign_key: true
      t.text :lot_size
      t.references :equipment, foreign_key: true
      t.references :auditor, foreign_key: true

      t.timestamps
    end
  end
end
