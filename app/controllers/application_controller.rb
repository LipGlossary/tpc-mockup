class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def logged_in?
    session[:loggedin].present?
  end
  helper_method :logged_in?
end
