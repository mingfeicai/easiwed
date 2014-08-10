class PostsController < ApplicationController
  respond_to :json

  def index
    @posts = Post.all
    respond_with @posts
  end

  def create
    respond_with Post.create(post_params)
  end

  def show
    respond_with Post.find_by(params[:id])
  end

  def update
    respond_with Post.update(params[:id], post_params)
  end

  def destroy
    respond_with Post.destroy(params[:id])
  end
  private
  def post_params
    params.require(:post).permit(:title, :author, :body)
  end
end
