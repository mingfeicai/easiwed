class ProblemsController < ApplicationController
  respond_to :json
  def index
    @problems = Problem.all
    respond_with @problems
  end
end
