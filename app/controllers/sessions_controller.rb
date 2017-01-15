class SessionsController < ApplicationController
  def create
    session[:loggedin] = true
    redirect_back(fallback_location: home_path)
  end

  def destroy
    session[:loggedin] = false
    redirect_back(fallback_location: home_path)
  end
end
