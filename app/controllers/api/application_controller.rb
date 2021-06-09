class Api::ApplicationController < ApplicationController
  include RansackParamsConcern

  respond_to :json
end
