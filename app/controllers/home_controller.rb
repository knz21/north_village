class HomeController < ApplicationController
  before_filter :authenticate_user!

  def index
    print current_user.name
    @token = JWT.encode({id: 'iddayo', pass: 'passdayo'}, ENV['JWT_TOKEN_SECRET'], 'HS256')
  end
end