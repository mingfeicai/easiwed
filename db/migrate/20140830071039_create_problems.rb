class CreateProblems < ActiveRecord::Migration
  def change
    create_table :problems do |t|
      t.string :title
      t.text :description
      t.references :category, index: true
      t.integer :challenge
      t.references :company, index: true
      t.text :answer

      t.timestamps
    end
  end
end
