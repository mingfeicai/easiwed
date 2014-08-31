class CompanyController < ApplicationController
  def index
    @company = Company.find_by(params[:name])
  end
end
