const ideaModel = require("../models");
const IdeaModel = require("../models");

// creating Iedes
exports.createIdea = async (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({
      success: false,
      message: "No Data Provided",
    });
  }

  await IdeaModel.create(data);
  const allIdeas = await ideaModel.find();

  return res.status(200).json({
    success: true,
    data: allIdeas,
  });
};

// fetching Ideas
exports.fetchIdea = async (req, res) => {
  const ideas = await IdeaModel.find();

  if (ideas.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No Idea Found",
    });
  }

  res.status(200).json({
    success: true,
    data: ideas,
  });
};

// update idea
exports.updateIdea = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const updateIdea = await IdeaModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  return res.status(200).json({
    success: true,
    data: updateIdea,
  });
};

// delete Idea
exports.deleteIdea = async (req, res) => {
  const { id } = req.params;
  const Idea = await IdeaModel.deleteOne({
    _id: id,
  });

  if (!Idea) {
    return res.status(404).json({
      success: false,
      message: "Idea to be deleted not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: Idea,
  });
};
