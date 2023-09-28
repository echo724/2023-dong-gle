import { connectionsURL } from 'constants/apis/url';
import { ERROR_RESPONSE, isValidAccessToken } from 'mocks/auth';
import { rest } from 'msw';

export const connectionsHandlers = [
  // 티스토리 정보 저장
  rest.post(`${connectionsURL}/tistory`, (req, res, ctx) => {
    if (!isValidAccessToken(req)) return res(ctx.status(401), ctx.json(ERROR_RESPONSE));

    return res(ctx.status(200));
  }),

  // 미디움 정보 저장
  rest.post(`${connectionsURL}/medium`, (req, res, ctx) => {
    if (!isValidAccessToken(req)) return res(ctx.status(401), ctx.json(ERROR_RESPONSE));

    return res(ctx.status(200));
  }),

  // 노션 정보 저장
  rest.post(`${connectionsURL}/notion`, (req, res, ctx) => {
    if (!isValidAccessToken(req)) return res(ctx.status(401), ctx.json(ERROR_RESPONSE));

    return res(ctx.status(200));
  }),

  // 티스토리 연결 해제
  rest.post(`${connectionsURL}/tistory/disconnect`, (req, res, ctx) => {
    if (!isValidAccessToken(req)) return res(ctx.status(401), ctx.json(ERROR_RESPONSE));

    return res(ctx.status(200));
  }),

  // 미디움 연결 해제
  rest.post(`${connectionsURL}/medium/disconnect`, (req, res, ctx) => {
    if (!isValidAccessToken(req)) return res(ctx.status(401), ctx.json(ERROR_RESPONSE));

    return res(ctx.status(200));
  }),

  // 노션 연결 해제
  rest.post(`${connectionsURL}/notion/disconnect`, (req, res, ctx) => {
    if (!isValidAccessToken(req)) return res(ctx.status(401), ctx.json(ERROR_RESPONSE));

    return res(ctx.status(200));
  }),
];
