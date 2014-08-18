class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :entityType
      t.integer :entityId
      t.string :small
      t.string :medium
      t.string :large
      t.string :distribution

      t.timestamps
    end
  end
end
