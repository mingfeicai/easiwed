class CreateProblemsTagsJoinTable < ActiveRecord::Migration
  def change
    create_table :problems_tags, id: false do |t|
      t.integer :problem_id
      t.integer :tag_id
    end
  end
end
