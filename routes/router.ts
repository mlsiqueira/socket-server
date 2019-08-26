import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensagens', (req: Request, resp: Response) => {
  resp.json({
    ok: true,
    msg: 'Tudo fica bem quando termina bem'
  })
});

router.post('/mensagens', (req: Request, resp: Response) => {
  const { from, msg } = req.body;
  console.log(req.body)
  //> para testar: curl -X POST -d "from=Mussum&msg=As biritis ta prontis" http://localhost:5000/mensagens
  //> testar no postman: POST > Body > x-www-form-urlencoded > preencho a tabela

  resp.json({
    ok: true,
    msg,
    from
  })
});

router.post('/mensagens/:id', (req: Request, resp: Response) => {
  const { from, msg } = req.body;
  const id = req.params.id;

  resp.json({
    id,
    msg,
    from
  })
});

export default router;