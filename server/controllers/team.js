import model from '../models';

const { Team } = model;

class Teams {
    static signUp(req, res) {
        const { name } = req.body
        return Team
            .create({
            name,
            })
            .then(teamData => res.status(201).send({
            success: true,
            message: 'Team successfully created',
            teamData
        }))
    }
    static modify(req, res) {
        const { username,
              T1value, T1points
            , T2value, T2points
            , T3value, T3points
            , T4value, T4points
            , T5value, T5points} = req.body
        return Team
          .findById(req.params.teamId)
          .then((team) => {
            team.update({
                username: username || team.username,
                T1value: T1value || team.T1points,
                T1points: T1points || team.T1points,
                T2value: T2value || team.T2points,
                T2points: T2points || team.T2points,
                T3value: T3value || team.T3points,
                T3points: T3points || team.T3points,
                T4value: T4value || team.T4points,
                T4points: T4points || team.T4points,
                T5value: T5value || team.T5points,
                T5points: T5points || team.T5points,
            })
            .then((updatedTeam) => {
              res.status(200).send({
                message: 'Book updated successfully',
                data: {
                    username: username || team.username,
                    T1value: T1value || team.T1points,
                    T1points: T1points || team.T1points,
                    T2value: T2value || team.T2points,
                    T2points: T2points || team.T2points,
                    T3value: T3value || team.T3points,
                    T3points: T3points || team.T3points,
                    T4value: T4value || team.T4points,
                    T4points: T4points || team.T4points,
                    T5value: T5value || team.T5points,
                    T5points: T5points || team.T5points,
                }
              })
            })
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
    }
    static delete(req, res) {
        return Team
          .findById(req.params.teamId)
          .then(team => {
            if(!team) {
              return res.status(400).send({
              message: 'Team Not Found',
              });
            }
            return team
              .destroy()
              .then(() => res.status(200).send({
                message: 'Team successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      }
}


export default Teams;