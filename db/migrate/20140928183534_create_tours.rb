class CreateTours < ActiveRecord::Migration
  def change
    create_table :tours do |t|
      t.string :name
      t.integer :durationMinutes
      t.references :guide, index: true

      t.timestamps
    end
  end
end

