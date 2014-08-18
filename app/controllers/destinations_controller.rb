class DestinationsController < ApplicationController
  respond_to :json

  def index
    @destinations = Destination.all
    respond_with @destinations
  end
end
